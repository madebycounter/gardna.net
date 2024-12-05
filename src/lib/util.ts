export function truncate(str: string, length: number) {
    return str.length > length
        ? str.substring(0, length).split(" ").slice(0, -1).join(" ") + "..."
        : str;
}
