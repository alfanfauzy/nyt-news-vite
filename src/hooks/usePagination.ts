import { useState } from "react";

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination handlers
    const goToPrevPage = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
        }
    };

    const goToNextPage = () => {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
    };

    const resetPage = () => setCurrentPage(1);

    const canGoPrev = currentPage > 1;

    return { goToNextPage, goToPrevPage, resetPage, canGoPrev, currentPage };
};
