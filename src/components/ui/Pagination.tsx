import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
    onPrevious: () => void;
    onNext: () => void;
    canGoPrevious?: boolean;
    canGoNext?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
    onPrevious,
    onNext,
    canGoPrevious = true,
    canGoNext = true,
}) => {
    return (
        <nav className="flex justify-between md:justify-between items-center gap-10 w-full">
            <button
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    !canGoPrevious
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                }`}
            >
                <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            <button
                onClick={onNext}
                disabled={!canGoNext}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    !canGoNext
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                }`}
            >
                Next <ChevronRight className="w-4 h-4" />
            </button>
        </nav>
    );
};

export default Pagination;
