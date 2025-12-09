import { useState, useMemo } from 'react';

interface UsePaginationProps<T> {
    items: T[];
    itemsPerPage: number;
}

export function usePagination<T>({ items, itemsPerPage }: UsePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const validCurrentPage = useMemo(() => {
        if (totalPages === 0) return 1;
        return currentPage > totalPages ? 1 : currentPage;
    }, [currentPage, totalPages]);

    const paginatedItems = useMemo(() => {
        const startIndex = (validCurrentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    }, [items, validCurrentPage, itemsPerPage]);

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return {
        currentPage: validCurrentPage,
        totalPages,
        paginatedItems,
        goToNextPage,
        goToPreviousPage,
        canGoNext: validCurrentPage < totalPages,
        canGoPrevious: validCurrentPage > 1,
    };
}
