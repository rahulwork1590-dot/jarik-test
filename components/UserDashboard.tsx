'use client';

import { useUsers } from '@/hooks/useUsers';
import { useSearch } from '@/hooks/useSearch';
import { usePagination } from '@/hooks/usePagination';
import { translations } from '@/i18n/translations';
import { Locale } from '@/i18n/config';
import { SearchBar } from './SearchBar';
import { UserTable } from './UserTable';
import { Pagination } from './Pagination';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { LanguageSwitcher } from './LanguageSwitcher';

interface UserDashboardProps {
    locale: Locale;
}

export function UserDashboard({ locale }: UserDashboardProps) {
    const t = translations[locale];
    const { users, loading, error, refetch } = useUsers();
    const { searchQuery, setSearchQuery, filteredUsers } = useSearch(users);
    const {
        currentPage,
        totalPages,
        paginatedItems,
        goToNextPage,
        goToPreviousPage,
        canGoNext,
        canGoPrevious,
    } = usePagination({ items: filteredUsers, itemsPerPage: 5 });

    if (loading) {
        return <LoadingSpinner message={t.loading} />;
    }

    if (error) {
        return <ErrorMessage message={t.error} onRetry={refetch} retryText={t.retry} />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
                            {t.title}
                        </h1>
                        <p className="text-gray-500 text-sm">
                            {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'} {searchQuery && 'found'}
                        </p>
                    </div>
                    <LanguageSwitcher currentLocale={locale} />
                </div>

                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder={t.searchPlaceholder}
                />

                {filteredUsers.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        </div>
                        <p className="text-gray-500 text-lg">{t.noResults}</p>
                    </div>
                ) : (
                    <>
                        <UserTable users={paginatedItems} translations={t} />

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onNext={goToNextPage}
                            onPrevious={goToPreviousPage}
                            canGoNext={canGoNext}
                            canGoPrevious={canGoPrevious}
                            translations={t}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
