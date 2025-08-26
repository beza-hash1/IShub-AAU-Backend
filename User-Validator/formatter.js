
export function formatUser(user) {
    const formattedName = `(${user.name.replace(/\s+/g, '_')})`;
    return `${formattedName} ${user.email}`;
}
