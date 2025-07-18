import type { Article } from "../../types/article";
import {
    getArticleAuthors,
    getArticleImage,
    getArticleSection,
    getArticleSnippet,
} from "../../utils/articleUtils";
import { formatDateShort } from "../../utils/dateUtils";
import { truncateText } from "../../utils/stringUtils";

interface ArticleCardProps {
    article: Article;
    className?: string;
    onArticleClick?: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    article,
    className,
    onArticleClick,
}) => {
    const imageUrl = getArticleImage(article);
    const authors = getArticleAuthors(article);
    const section = getArticleSection(article);
    const snippet = getArticleSnippet(article);

    const handleClick = () => {
        if (onArticleClick) {
            onArticleClick(article);
        } else {
            window.open(article.web_url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <article
            onClick={handleClick}
            className={`cursor-pointer group flex flex-col sm:flex-row gap-4 border-b border-gray-200 pb-6 mb-6 ${className}`}
        >
            {imageUrl && (
                <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={article.headline.main}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                        }}
                    />
                </div>
            )}

            <div className="flex-1">
                {/* Section */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {section}
                </p>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                    {truncateText(article.headline.main, 100)}
                </h2>

                {/* Snippet */}
                <p className="text-gray-700 mb-4 leading-relaxed text-base">
                    {truncateText(snippet, 160)}
                </p>

                {/* Meta */}
                <div className="text-sm text-gray-500">
                    <span>{formatDateShort(article.pub_date)}</span>
                    {authors && (
                        <>
                            <span className="mx-2">•</span>
                            <span>{truncateText(authors, 40)}</span>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;
