import type { ReactNode } from "react";

type FilterTabProps = {
    children: ReactNode;
    isActive: boolean;
    selectedCount?: number;
    onClick: () => void;
};

const FilterTab: React.FC<FilterTabProps> = ({
    children,
    isActive,
    selectedCount = 0,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
                isActive
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700"
            }`}
        >
            {children}
            {selectedCount > 0 && (
                <span className="ml-2 bg-blue-500 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                    {selectedCount}
                </span>
            )}
        </button>
    );
};

export default FilterTab;
