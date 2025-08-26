import { readFile } from './fileReader.js';
import { validateUser } from './validator.js';
import { formatUser } from './formatter.js';
import { writeValidUsers } from './fileWriter.js';

const INPUT_FILE = 'random_user.txt';
const OUTPUT_FILE = 'ValidUsers.txt';

async function main() {
    const lines = await readFile(INPUT_FILE);

    let total = lines.length;
    let validUsers = [];
    let invalidUsers = [];

    for (const line of lines) {
        const result = validateUser(line);
        if (result.valid) {
            validUsers.push(formatUser(result));
        } else {
            invalidUsers.push(result);
        }
    }

    console.log(`Total users processed: ${total}`);
    console.log(`Number of valid users: ${validUsers.length}`);
    console.log(`Number of invalid users: ${invalidUsers.length}`);

    if (invalidUsers.length > 0) {
        console.log('\nInvalid Users:');
        invalidUsers.forEach(u => console.log(`${u.line} => ${u.error}`));
    }

    await writeValidUsers(OUTPUT_FILE, validUsers);
}

main();
