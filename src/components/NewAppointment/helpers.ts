export function someAreEmpty(...fields: string[]): boolean {
    if (fields.length === 0) {
        return true;
    }
    return fields.some((field) => field.trim() === "");
}
