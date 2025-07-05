import React, { useEffect, useRef } from "react";
import FilterTab from "./filterTab";
import FilterOptions from "./filterOptions";
import { FILTER_OPTIONS, type FilterType } from "../../constants/filterOptions";

type FilterPopupProps = {
    isOpen: boolean;
    onClose: () => void;
    onHidden: () => void;
    activeTab: FilterType;
    onTabChange: (tab: FilterType) => void;
    tempFilters: Record<FilterType, string[]>;
    onFilterChange: (tab: FilterType, code: string, checked: boolean) => void;
    tabSearchKeywords: Record<FilterType, string>;
    onTabSearchChange: (tab: FilterType, value: string) => void;
    onTabSearchClear: (tab: FilterType) => void;
    onApplyFilters: () => void;
    onResetAllFilters: () => void;
    filtersChanged: boolean;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
    resetPage: () => void;
};

const FilterPopup: React.FC<FilterPopupProps> = ({
    isOpen,
    onClose,
    onHidden,
    activeTab,
    onTabChange,
    tempFilters,
    onFilterChange,
    tabSearchKeywords,
    onTabSearchChange,
    onTabSearchClear,
    onApplyFilters,
    onResetAllFilters,
    filtersChanged,
    triggerRef,
    resetPage,
}) => {
    const filterRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            const clickedOutsidePopup =
                filterRef.current && !filterRef.current.contains(target);
            const clickedOutsideButton =
                !triggerRef?.current || !triggerRef.current.contains(target);

            if (isOpen && clickedOutsidePopup && clickedOutsideButton) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose, triggerRef]);

    if (!isOpen) return null;

    const getSelectedCount = (type: FilterType) => tempFilters[type].length;
    const getOptions = (type: FilterType) =>
        type === "origin_code"
            ? FILTER_OPTIONS.origin_code
            : FILTER_OPTIONS.destination_code;

    const hasOrigin =
        Array.isArray(tempFilters.origin_code) &&
        tempFilters.origin_code.length > 0;

    const hasDestination =
        Array.isArray(tempFilters.destination_code) &&
        tempFilters.destination_code.length > 0;

    const isHaveFilter = hasOrigin || hasDestination;

    const handleButtonApply = () => {
        onHidden();
        onApplyFilters();
        resetPage();
    };

    return (
        <div
            className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
            ref={filterRef}
        >
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <FilterTab
                    isActive={activeTab === "origin_code"}
                    selectedCount={getSelectedCount("origin_code")}
                    onClick={() => onTabChange("origin_code")}
                >
                    Origin Code
                </FilterTab>
                <FilterTab
                    isActive={activeTab === "destination_code"}
                    selectedCount={getSelectedCount("destination_code")}
                    onClick={() => onTabChange("destination_code")}
                >
                    Destination Code
                </FilterTab>
            </div>

            {/* Tab Content */}
            <FilterOptions
                options={getOptions(activeTab)}
                selectedValues={tempFilters[activeTab]}
                onSelectionChange={(code, checked) =>
                    onFilterChange(activeTab, code, checked)
                }
                searchKeyword={tabSearchKeywords[activeTab]}
                onSearchChange={(value) => onTabSearchChange(activeTab, value)}
                onSearchClear={() => onTabSearchClear(activeTab)}
            />

            {/* Footer */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <button
                    onClick={() => isHaveFilter && onResetAllFilters()}
                    className={`px-4 py-2 text-sm text-gray-600 hover:text-gray-800  ${
                        isHaveFilter
                            ? "text-red-400 cursor-pointer"
                            : "text-slate-500 cursor-not-allowed"
                    }`}
                >
                    Reset Filter
                </button>
                <button
                    onClick={handleButtonApply}
                    disabled={!filtersChanged}
                    className={`px-4 py-2 text-sm rounded-md ${
                        filtersChanged
                            ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                    Terapkan
                </button>
            </div>
        </div>
    );
};

export default FilterPopup;
