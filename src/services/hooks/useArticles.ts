import { useState, useCallback } from "react";
import { articleService } from "../articlesService";
import type { Article } from "../../types/article";

export const useArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchArticles = useCallback(async (query: string, page: number) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await articleService.getArticlesByQuery(query, page);

            setArticles(data.response.docs);
        } catch (err) {
            setError(`Failed to fetch articles. ${err}`);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { articles, isLoading, error, fetchArticles };
};
