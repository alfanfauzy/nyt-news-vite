import type { Article } from "../types/article";

export const getArticleImage = (article: Article): string | null => {
    // Look for the best image (prefer larger images)
    const bestImage = article.multimedia.default.url;

    return bestImage ?? null;
};

export const getArticleAuthors = (article: Article): string => {
    if (!article.byline?.person || article.byline.person.length === 0) {
        return article.byline?.original || "Unknown Author";
    }

    const authors = article.byline.person
        .map((person) => {
            const parts = [
                person.firstname,
                person.middlename,
                person.lastname,
            ].filter(Boolean);
            return parts.join(" ");
        })
        .filter(Boolean);

    if (authors.length === 0) {
        return "Unknown Author";
    }

    if (authors.length === 1) {
        return authors[0];
    }

    if (authors.length === 2) {
        return `${authors[0]} and ${authors[1]}`;
    }

    return `${authors.slice(0, -1).join(", ")}, and ${
        authors[authors.length - 1]
    }`;
};

export const getArticleSection = (article: Article): string => {
    return article.section_name || article.news_desk || "General";
};

export const getArticleSnippet = (article: Article): string => {
    return article.snippet || article.abstract || article.lead_paragraph || "";
};

export const getArticleKeywords = (article: Article): string[] => {
    if (!article.keywords || article.keywords.length === 0) {
        return [];
    }

    return article.keywords
        .filter(
            (keyword) =>
                keyword.name === "subject" || keyword.name === "glocations"
        )
        .map((keyword) => keyword.value)
        .slice(0, 5); // Limit to 5 keywords
};

export const getReadingTime = (article: Article): number => {
    const wordsPerMinute = 200;
    const wordCount = article.word_count || 0;
    return Math.ceil(wordCount / wordsPerMinute);
};

export const generateArticleId = (article: Article): string => {
    return article._id || article.uri || `article-${Date.now()}`;
};

export const isRecentArticle = (
    article: Article,
    daysThreshold: number = 7
): boolean => {
    const articleDate = new Date(article.pub_date);
    const now = new Date();
    const diffInDays = Math.floor(
        (now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffInDays <= daysThreshold;
};

export const sortArticlesByDate = (
    articles: Article[],
    order: "asc" | "desc" = "desc"
): Article[] => {
    return [...articles].sort((a, b) => {
        const dateA = new Date(a.pub_date).getTime();
        const dateB = new Date(b.pub_date).getTime();
        return order === "desc" ? dateB - dateA : dateA - dateB;
    });
};

export const filterArticlesBySection = (
    articles: Article[],
    section: string
): Article[] => {
    return articles.filter(
        (article) =>
            getArticleSection(article).toLowerCase() === section.toLowerCase()
    );
};

export const searchArticlesLocally = (
    articles: Article[],
    query: string
): Article[] => {
    const searchTerm = query.toLowerCase();
    return articles.filter(
        (article) =>
            article.headline.main.toLowerCase().includes(searchTerm) ||
            article.snippet.toLowerCase().includes(searchTerm) ||
            article.abstract.toLowerCase().includes(searchTerm) ||
            getArticleAuthors(article).toLowerCase().includes(searchTerm)
    );
};
