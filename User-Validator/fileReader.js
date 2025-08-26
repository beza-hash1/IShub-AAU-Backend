
import fs from 'fs/promises';

export async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data.split('\n').map(line => line.trim()).filter(Boolean);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}
