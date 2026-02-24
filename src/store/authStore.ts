
import { create } from 'zustand';
import { signOut as nextAuthSignOut, getSession } from 'next-auth/react';

interface AuthState {
    user: any | null;
    isAdmin: boolean;
    role: string | null;
    isLoading: boolean;
    signOut: () => Promise<void>;
    checkAuth: () => Promise<void>;
    setUser: (user: any | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAdmin: false,
    role: null,
    isLoading: true,

    signOut: async () => {
        await nextAuthSignOut({ redirect: true, callbackUrl: '/' });
        set({ user: null, isAdmin: false, role: null });
    },

    checkAuth: async () => {
        set({ isLoading: true });
        try {
            const session = await getSession();

            if (session?.user) {
                set({
                    user: session.user,
                    isAdmin: session.user.role === 'admin',
                    role: (session.user as any).role || 'user',
                    isLoading: false
                });
            } else {
                set({ user: null, isAdmin: false, role: null, isLoading: false });
            }
        } catch (error) {
            console.error('Auth verification failed:', error);
            set({ user: null, isAdmin: false, isLoading: false });
        }
    },

    setUser: (user) => set({ user }),
}));

