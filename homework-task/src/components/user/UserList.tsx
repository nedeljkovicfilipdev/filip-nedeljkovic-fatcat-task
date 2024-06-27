import React, { useState, useEffect } from 'react';

import clsx from 'clsx';

import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<User[]>('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error: unknown) => {
                if (axios.isAxiosError(error)) {
                    setError(error.message);
                } else {
                    setError('An unexpected error occurred');
                }
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
            <ul className="space-y-4">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={clsx(
                            'p-4 border rounded-lg shadow-md',
                            'hover:bg-gray-100 transition duration-200'
                        )}
                    >
                        <p>
                            <strong>ID:</strong> {user.id}
                        </p>
                        <p>
                            <strong>Name:</strong> {user.name}
                        </p>
                        <p>
                            <strong>Username:</strong> {user.username}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {user.phone}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
