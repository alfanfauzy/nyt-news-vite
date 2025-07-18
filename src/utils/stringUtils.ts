export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
};

export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeWords = (str: string): string => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const slugify = (str: string): string => {
    return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export const removeHtmlTags = (html: string): string => {
    return html.replace(/<[^>]*>?/gm, "");
};

export const escapeHtml = (text: string): string => {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
};

export const unescapeHtml = (text: string): string => {
    const map: Record<string, string> = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#039;": "'",
    };
    return text.replace(/&(amp|lt|gt|quot|#039);/g, (m) => map[m]);
};

export const extractFirstSentence = (text: string): string => {
    const sentences = text.split(/[.!?]/);
    return sentences[0] ? sentences[0].trim() + "." : text;
};

export const getInitials = (name: string): string => {
    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);
};
