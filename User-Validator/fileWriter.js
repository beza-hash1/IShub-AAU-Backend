
import fs from 'fs/promises';

export async function writeValidUsers(filePath, users) {
    try {
        await fs.writeFile(filePath, users.join('\n'), 'utf-8');
        console.log(`Valid users written to ${filePath}`);
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
