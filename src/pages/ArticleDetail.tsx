import { useLocation, useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { formatDateShort } from "../utils/dateUtils";
import type { Article } from "../types/article";

export const ArticleDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const article: Article = location.state;

    const imageUrl = article.multimedia.default.url;

    if (!article) {
        return (
            <div className="p-8 text-center">
                <p className="text-gray-600">No article data provided.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                    Go Back
                </button>
            </div>
        );
    }

    console.log(article);

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">{article.headline.main}</h1>

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

            <p className="text-gray-600 mb-2">
                {formatDateShort(article.pub_date)}
            </p>
            <p className="text-gray-700 mb-6">{article.snippet}</p>

            <a
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
                Read on NYT
                <ExternalLink className="w-4 h-4 ml-1" />
            </a>
        </div>
    );
};
