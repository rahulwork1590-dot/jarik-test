import { useState, useEffect, useCallback } from 'react';
import { User } from '@/types/user';

interface UseUsersReturn {
    users: User[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useUsers(): UseUsersReturn {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchUsers();
    }, [fetchUsers]);

    return {
        users,
        loading,
        error,
        refetch: () => void fetchUsers(),
    };
}
