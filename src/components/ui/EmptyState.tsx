import { Search, FileText, TrendingUp } from "lucide-react";
import { cn } from "../../utils/cn";

interface EmptyStateProps {
    title?: string;
    message?: string;
    type?: "search" | "no-results" | "trending";
    className?: string;
    onAction?: () => void;
    actionLabel?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    message,
    type = "search",
    className,
    onAction,
    actionLabel,
}) => {
    const getIcon = () => {
        switch (type) {
            case "search":
                return <Search className="w-12 h-12 text-gray-400" />;
            case "no-results":
                return <FileText className="w-12 h-12 text-gray-400" />;
            case "trending":
                return <TrendingUp className="w-12 h-12 text-gray-400" />;
            default:
                return <Search className="w-12 h-12 text-gray-400" />;
        }
    };

    const getDefaultContent = () => {
        switch (type) {
            case "search":
                return {
                    title: "Start Your Search",
                    message:
                        "Enter keywords to find articles from The New York Times",
                };
            case "no-results":
                return {
                    title: "No Articles Found",
                    message:
                        "Try adjusting your search terms or browse different topics",
                };
            case "trending":
                return {
                    title: "Discover Trending Topics",
                    message: "Explore popular articles and latest news",
                };
            default:
                return {
                    title: "Start Your Search",
                    message:
                        "Enter keywords to find articles from The New York Times",
                };
        }
    };

    const defaultContent = getDefaultContent();

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-16 px-4",
                "text-center",
                className
            )}
        >
            <div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                {getIcon()}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {title || defaultContent.title}
            </h3>

            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                {message || defaultContent.message}
            </p>

            {onAction && actionLabel && (
                <button
                    onClick={onAction}
                    className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                    {actionLabel}
                </button>
            )}

            {type === "search" && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                            Politics
                        </h4>
                        <p className="text-sm text-gray-600">
                            Latest political news and analysis
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                            Technology
                        </h4>
                        <p className="text-sm text-gray-600">
                            Tech innovations and trends
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                            Business
                        </h4>
                        <p className="text-sm text-gray-600">
                            Market updates and analysis
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmptyState;
