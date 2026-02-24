'use server'

import { db } from '@/lib/db';
import { verificationTokens, users } from '@/lib/db/schema';
import { eq, count, and } from 'drizzle-orm';
import { resend } from '@/lib/resend';
import { signIn } from '@/auth';
import bcrypt from 'bcryptjs';

/**
 * Server Action to setup the initial Admin account.
 */
export async function setupAdminAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    if (!email || !password || !name) {
        return { success: false, error: "Missing required fields." };
    }

    try {
        // 1. Check existing admin (Drizzle)
        const result = await db.select({ count: count() }).from(users).where(eq(users.role, 'admin'));
        const adminCount = result[0]?.count || 0;

        if (adminCount > 0) {
            return { error: "System initialized. Redirecting to login...", redirect: '/signin' };
        }

        // 2. Hash Password
        const passwordHash = await bcrypt.hash(password, 10);

        // 3. Create User (Drizzle)
        const [newUser] = await db.insert(users).values({
            email,
            password: passwordHash,
            role: 'admin',
            name,
            isActive: true
        }).returning();

        if (!newUser) throw new Error("Failed to create admin account.");

        return { success: true };

    } catch (error: any) {
        console.error("Setup Admin Action Error:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Server Action to send Password Reset Email via Resend.
 */
export async function sendPasswordResetAction(email: string) {
    if (!email) return { success: false, error: "Email is required." };

    try {
        // 1. Check existence/role using Drizzle
        const user = await db.query.users.findFirst({
            where: and(eq(users.email, email), eq(users.role, 'admin'))
        });

        if (!user) {
            // Security: Fake success
            return { success: true };
        }

        // 2. Generate Native Token
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const expires = new Date(Date.now() + 3600000); // 1 hour

        await db.insert(verificationTokens).values({
            identifier: email,
            token,
            expires
        });

        const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${token}`;

        // 3. Send Email via Resend
        await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            to: email,
            subject: 'ACTION REQUIRED: Admin Access Recovery',
            html: `
                <div style="font-family: monospace; background-color: #0A1128; color: #ffffff; padding: 40px;">
                    <h1 style="color: #D4AF37; margin-bottom: 20px;">RECOVERY_PROTOCOL_INITIATED</h1>
                    <p>An access recovery request was received for the Admin Terminal.</p>
                    <p>Identity: <strong>${email}</strong></p>
                    <br/>
                    <a href="${resetLink}" style="background-color: #D4AF37; color: #0A1128; padding: 15px 30px; text-decoration: none; font-weight: bold; display: inline-block;">
                        ESTABLISH_RECOVERY_UPLINK
                    </a>
                    <br/><br/>
                    <p style="color: #64748b; font-size: 10px;">
                        SECURE RECOVERY EMAIL // IF THIS WAS NOT YOU, TERMINATE IMMEDIATELY.
                    </p>
                </div>
            `
        });

        return { success: true };

    } catch (error: any) {
        console.error("Reset Action Error:", error);
        return { success: false, error: "System failure." };
    }
}

/**
 * Server Action to check if an admin exists.
 */
export async function checkAdminStatus() {
    try {
        const result = await db.select({ count: count() }).from(users).where(eq(users.role, 'admin'));
        const adminCount = result[0]?.count || 0;
        return { adminExists: adminCount > 0 };
    } catch (error) {
        console.error("Check Admin Error:", error);
        return { adminExists: false };
    }
}

/**
 * Server Action to securely claim Admin role if the system is headless (0 admins).
 * This acts as the "Self-Healing" mechanism post-login.
 */
export async function claimOrphanedAdminRole(userId: string) {
    if (!userId) return { success: false };

    try {
        // 1. SECURITY CRITICAL: Ensure NO admins exist.
        const result = await db.select({ count: count() }).from(users).where(eq(users.role, 'admin'));
        const adminCount = result[0]?.count || 0;

        if (adminCount > 0) {
            // System is healthy, do not allow arbitrary promotion.
            return { success: false, error: "Admins already exist." };
        }

        // 2. Double check validity of the user in public table
        // We can just try to update. If they don't exist, it does nothing.

        await db.update(users)
            .set({ role: 'admin' })
            .where(eq(users.id, userId));

        return { success: true };
    } catch (error) {
        console.error("Claim Admin Error:", error);
        return { success: false };
    }
}

/**
 * Server Action to Register a new user.
 */
export async function signUpAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    if (!email || !password || !name) {
        return { success: false, error: "Missing required fields." };
    }

    try {
        // 1. Hash Password
        const passwordHash = await bcrypt.hash(password, 10);

        // 2. Insert User (Drizzle)
        await db.insert(users).values({
            email,
            password: passwordHash,
            role: 'user', // Default role for manual signups
            name,
            isActive: true
        });

        return { success: true };

    } catch (error: any) {
        console.error("Sign Up Error:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Server Action to reset password using a token.
 */
export async function resetPasswordWithTokenAction(token: string, password: string) {
    if (!token || !password) return { success: false, error: "Missing required fields." };

    try {
        // 1. Verify Token
        const verificationToken = await db.query.verificationTokens.findFirst({
            where: eq(verificationTokens.token, token)
        });

        if (!verificationToken || verificationToken.expires < new Date()) {
            return { success: false, error: "Invalid or expired token." };
        }

        // 2. Hash New Password
        const passwordHash = await bcrypt.hash(password, 10);

        // 3. Update User
        await db.update(users)
            .set({ password: passwordHash })
            .where(eq(users.email, verificationToken.identifier));

        // 4. Delete used token
        await db.delete(verificationTokens).where(eq(verificationTokens.token, token));

        return { success: true };

    } catch (error: any) {
        console.error("Reset Password Error:", error);
        return { success: false, error: "System failure." };
    }
}


