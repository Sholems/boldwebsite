
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

/**
 * Uploads a file to the local public/uploads directory.
 * @returns The public URL of the uploaded file.
 */
export async function uploadFile(file: File, folder: string): Promise<string | null> {
    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
        const relativePath = join('uploads', folder, fileName);
        const absolutePath = join(process.cwd(), 'public', relativePath);

        // Ensure directory exists
        const dir = join(process.cwd(), 'public', 'uploads', folder);
        if (!existsSync(dir)) {
            await mkdir(dir, { recursive: true });
        }

        await writeFile(absolutePath, buffer);

        // Return the public URL
        return `/${relativePath.replace(/\\/g, '/')}`;
    } catch (error) {
        console.error('Local storage upload error:', error);
        return null;
    }
}
