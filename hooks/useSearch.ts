import { useState, useMemo } from 'react';
import { User } from '@/types/user';

export function useSearch(users: User[]) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = useMemo(() => {
        if (!searchQuery.trim()) {
            return users;
        }

        const query = searchQuery.toLowerCase();
        return users.filter((user) => {
            const nameMatch = user.name.toLowerCase().includes(query);
            const emailMatch = user.email.toLowerCase().includes(query);
            return nameMatch || emailMatch;
        });
    }, [users, searchQuery]);

    return {
        searchQuery,
        setSearchQuery,
        filteredUsers,
    };
}
