export function someAreEmpty(...fields: string[]): boolean {
    return fields.some((field) => field.trim() === "")
}
