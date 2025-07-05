import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import SearchInput from "./components/common/searchInput";
import FilterButton from "./components/filters/filterButton";
import FilterPopup from "./components/filters/filterPopUp";
import OrdersGrid from "./components/cards/gridCard";
import Pagination from "./components/common/pagination";
import { apiService } from "./services/apiServices";
import type { OrderData } from "./types/order";
import { debounce } from "./utils/helpers";
import type { FilterType } from "./constants/filterOptions";
import { useOrderFilters } from "./hooks/useOrderFilter";
import { usePagination } from "./hooks/usePagination";

export type Filters = Record<FilterType, string[]>;

// --- Main Component ---
const App: React.FC = () => {
    const [orders, setOrders] = useState<OrderData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [showFilterPopup, setShowFilterPopup] = useState<boolean>(false);

    const {
        activeTab,
        setActiveTab,
        tempFilters,
        appliedFilters,
        setTempFilters,
        handleFilterChange,
        handleApplyFilters,
        handleResetAllFilters,
        tabSearchKeywords,
        filtersChanged,
        handleTabSearchChange,
        handleTabSearchClear,
        getActiveFiltersCount,
    } = useOrderFilters();

    const { currentPage, goToNextPage, goToPrevPage, resetPage, canGoPrev } =
        usePagination();

    // Fetch orders
    const fetchOrders = async (
        keyword: string = "",
        filters: Filters = appliedFilters,
        page: number = 1
    ) => {
        setLoading(true);
        try {
            const data = await apiService.fetchData(keyword, filters, page);
            setOrders(data);
        } finally {
            setLoading(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchOrders(searchKeyword, appliedFilters, currentPage);
    }, [appliedFilters, currentPage]);

    // Debounced search function
    const debouncedSearch = useMemo(
        () =>
            debounce((keyword: string) => {
                fetchOrders(keyword, appliedFilters, 1);
                resetPage();
            }, 500),
        [appliedFilters]
    );

    // Search handlers
    const handleSearch = useCallback((value: string) => {
        setSearchKeyword(value);
        debouncedSearch(value);
    }, []);

    const handleSearchClear = useCallback(() => {
        setSearchKeyword("");
        resetPage();
        debouncedSearch("");
    }, []);

    const handleSetFalsePopUp = useCallback(() => {
        setShowFilterPopup((prev) => !prev);
    }, []);

    const handleFilterResetAndClose = useCallback(() => {
        setTempFilters(appliedFilters); // Reset to applied filters
        handleSetFalsePopUp();
    }, []);

    const filterButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <main className="mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Orders Management
                </h1>
                <p className="text-gray-600">
                    Manage and track your delivery orders
                </p>
            </header>
            {/* Search and Filter Controls */}
            <nav className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-3 gap-4">
                <section className="flex flex-col sm:flex-row gap-4 rounded-lg shadow-sm p-6 w-3/5">
                    <SearchInput
                        value={searchKeyword}
                        onChange={handleSearch}
                        onClear={handleSearchClear}
                        placeholder="Cari berdasarkan nama barang ..."
                    />

                    <div className="relative">
                        <FilterButton
                            ref={filterButtonRef}
                            onClick={handleSetFalsePopUp}
                            activeFiltersCount={getActiveFiltersCount()}
                        />

                        <FilterPopup
                            isOpen={showFilterPopup}
                            onClose={handleFilterResetAndClose}
                            onHidden={handleSetFalsePopUp}
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                            tempFilters={tempFilters}
                            onFilterChange={handleFilterChange}
                            tabSearchKeywords={tabSearchKeywords}
                            onTabSearchChange={handleTabSearchChange}
                            onTabSearchClear={handleTabSearchClear}
                            onApplyFilters={handleApplyFilters}
                            onResetAllFilters={handleResetAllFilters}
                            filtersChanged={filtersChanged()}
                            triggerRef={filterButtonRef}
                            resetPage={resetPage}
                        />
                    </div>
                </section>
                <section className="flex justify-center items-center w-1/5">
                    {/* Pagination */}
                    <Pagination
                        onPrevious={goToPrevPage}
                        onNext={goToNextPage}
                        canGoPrevious={canGoPrev}
                        canGoNext={orders.length > 0}
                    />
                </section>
            </nav>

            {/* Orders Grid */}
            <OrdersGrid orders={orders} loading={loading} />
        </main>
    );
};

export default App;
