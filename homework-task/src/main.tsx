import React from 'react';
import ReactDOM from 'react-dom/client';
//To be checked @homework-task, what should it do
import { App } from '@homework-task/App';

const rootElement = document.getElementById('root')

if(rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}else{
    console.error("Cannot find root element.")
}