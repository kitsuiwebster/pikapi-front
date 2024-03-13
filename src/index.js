import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { ThemeProvider } from './ThemeContext';
import AppWrapper from './AppWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <AppWrapper router={AppRouter} />
        </ThemeProvider>
    </React.StrictMode>
);
