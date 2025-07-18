import { cn } from "@/utils/cn";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingStateProps {
    message?: string;
    className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
    message = "Loading...",
    className,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-12",
                className
            )}
        >
            <LoadingSpinner size="lg" className="text-blue-500 mb-4" />
            <p className="text-gray-600 text-lg font-medium">{message}</p>
        </div>
    );
};

export default LoadingState;
