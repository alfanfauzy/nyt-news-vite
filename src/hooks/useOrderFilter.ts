import { useCallback, useState } from "react";
import type { FilterType } from "../constants/filterOptions";

type Filters = Record<FilterType, string[]>;
type TabSearchKeywords = Record<FilterType, string>;

export const useOrderFilters = () => {
    const [activeTab, setActiveTab] = useState<FilterType>("origin_code");
    const [tabSearchKeywords, setTabSearchKeywords] =
        useState<TabSearchKeywords>({
            origin_code: "",
            destination_code: "",
        });
    const [tempFilters, setTempFilters] = useState<Filters>({
        origin_code: [],
        destination_code: [],
    });
    const [appliedFilters, setAppliedFilters] = useState<Filters>({
        origin_code: [],
        destination_code: [],
    });

    const handleFilterChange = (
        type: FilterType,
        code: string,
        checked: boolean
    ) => {
        console.log(type);
        console.log(code);
        console.log(checked);
        setTempFilters((prev) => ({
            ...prev,
            [type]: checked
                ? [...prev[type], code]
                : prev[type].filter((item) => item !== code),
        }));
    };

    const handleApplyFilters = () => {
        setAppliedFilters(tempFilters);
    };

    const handleResetAllFilters = () => {
        const reset: Filters = { origin_code: [], destination_code: [] };
        setTempFilters(reset);
        setAppliedFilters(reset);
    };

    const filtersChanged = () =>
        JSON.stringify(tempFilters) !== JSON.stringify(appliedFilters);

    const handleTabSearchChange = (tab: FilterType, value: string) => {
        setTabSearchKeywords((prev) => ({
            ...prev,
            [tab]: value,
        }));
    };

    const handleTabSearchClear = (tab: FilterType) => {
        setTabSearchKeywords((prev) => ({
            ...prev,
            [tab]: "",
        }));
    };

    // Utility functions
    const getActiveFiltersCount = useCallback((): number => {
        return (
            appliedFilters.origin_code.length +
            appliedFilters.destination_code.length
        );
    }, [appliedFilters]);

    return {
        activeTab,
        setActiveTab,
        tempFilters,
        appliedFilters,
        setTempFilters,
        setAppliedFilters,
        handleFilterChange,
        handleApplyFilters,
        handleResetAllFilters,
        tabSearchKeywords,
        setTabSearchKeywords,
        filtersChanged,
        handleTabSearchChange,
        handleTabSearchClear,
        getActiveFiltersCount,
    };
};
