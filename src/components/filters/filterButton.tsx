import React from "react";
import { Filter } from "lucide-react";

type FilterButtonProps = {
    onClick: () => void;
    activeFiltersCount: number;
};

const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>(
    ({ onClick, activeFiltersCount }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
                <Filter className="w-5 h-5" />
                Filter
                {activeFiltersCount > 0 && (
                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {activeFiltersCount}
                    </span>
                )}
            </button>
        );
    }
);

FilterButton.displayName = "FilterButton"; // ✅ Important for React dev tools
export default FilterButton;
