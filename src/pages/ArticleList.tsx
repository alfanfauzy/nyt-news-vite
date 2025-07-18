import { useCallback, useEffect, useState } from "react";

import {
    ArticleCard,
    EmptyState,
    LoadingState,
    SearchInput,
} from "../components/ui";
import Pagination from "../components/ui/Pagination";
import { usePagination } from "../hooks/usePagination";
import { useArticles } from "../services/hooks/useArticles";

export const ArticleListPage = () => {
    const [query, setQuery] = useState("");

    const { canGoPrev, currentPage, goToNextPage, goToPrevPage, resetPage } =
        usePagination();

    const { articles, fetchArticles, isLoading } = useArticles();

    useEffect(() => {
        fetchArticles(query, currentPage);
    }, [currentPage]);

    // Search handlers
    const handleChangeSearch = (value: string) => {
        setQuery(value);
    };

    const handleSearch = (e: React.FormEvent) => {
        console.log("panggil ini");
        console.log("query", query);
        e.preventDefault();
        resetPage();
        fetchArticles(query, currentPage);
    };

    const handleClear = useCallback(() => {
        console.log("apa malh ini");
        setQuery("");
        resetPage();
        fetchArticles("", 1);
    }, []);

    const handleOpenDetailArticle = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <SearchInput
                onSearch={handleSearch}
                value={query}
                onChange={handleChangeSearch}
                onClear={handleClear}
            />

            {isLoading ? (
                <LoadingState />
            ) : articles.length === 0 ? (
                <EmptyState type={query ? "no-results" : "search"} />
            ) : (
                <>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article._id}
                                article={article}
                                onArticleClick={() =>
                                    handleOpenDetailArticle(article.web_url)
                                }
                            />
                        ))}
                    </div>

                    <div className="mt-8">
                        <Pagination
                            onNext={goToNextPage}
                            onPrevious={goToPrevPage}
                            canGoPrevious={canGoPrev}
                        />
                    </div>
                </>
            )}
        </div>
    );
};
