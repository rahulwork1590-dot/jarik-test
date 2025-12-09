interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
    canGoNext: boolean;
    canGoPrevious: boolean;
    translations: {
        previous: string;
        next: string;
        page: string;
        of: string;
    };
}

export function Pagination({
    currentPage,
    totalPages,
    onNext,
    onPrevious,
    canGoNext,
    canGoPrevious,
    translations,
}: PaginationProps) {
    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200">
            <button
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">{translations.previous}</span>
            </button>

            <div className="text-sm text-gray-700 font-medium">
                {translations.page} <span className="font-bold text-blue-600">{currentPage}</span> {translations.of} <span className="font-bold">{totalPages}</span>
            </div>

            <button
                onClick={onNext}
                disabled={!canGoNext}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
                <span className="hidden sm:inline">{translations.next}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
