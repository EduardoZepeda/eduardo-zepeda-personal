export function stripHtml(str: string): string {
    if ((str === null) || (str === '')) {
        return ""; // Handle null or empty input
    } else {
        str = str.toString();
    }
    // The regex /<[^>]*>/g matches any character between '<' and '>'
    // and replaces it with an empty string. The 'g' flag ensures all
    // occurrences are replaced, not just the first one.
    return str.replace(/<[^>]*>/g, '');
}

export function stripHtmlEntities(str: string) {
    let regex = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/ig;
    let result = str.replace(regex, "");
    return result;
}