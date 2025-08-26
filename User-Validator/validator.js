import validator from 'validator';

export function validateUser(userLine) {
    const line = userLine.trim();
    const parts = line.split(' ');

    if (parts.length < 2) return { valid: false, error: 'Incomplete data', line: userLine };

    const name = parts[0];    // first part: name with underscore
    const email = parts[1];   // second part: email

    const errors = [];

    if (!/^[A-Za-z_]+$/.test(name)) errors.push('Invalid name');
    if (!validator.isEmail(email)) errors.push('Invalid email');

    if (errors.length) return { valid: false, error: errors.join(', '), line: userLine };

    // Convert underscore to space for formatting
    return { valid: true, name: name.replace('_', ' '), email };
}
