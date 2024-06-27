import React from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { App } from '@homework-task/App';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient();

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </React.StrictMode>
    );
} else {
    throw new Error('No root element');
}
