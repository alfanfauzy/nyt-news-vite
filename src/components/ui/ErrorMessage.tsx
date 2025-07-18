import { AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "../../utils/cn";

interface ErrorMessageProps {
    title?: string;
    message: string;
    onRetry?: () => void;
    className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    title = "Something went wrong",
    message,
    onRetry,
    className,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-12 px-4",
                className
            )}
        >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {title}
            </h3>

            <p className="text-gray-600 text-center mb-6 max-w-md">{message}</p>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;
