import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from '@homework-task/App';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    throw new Error('No root element');
}
