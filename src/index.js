import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

export const url = 'http://localhost:4001';
// export const url = 'https://api.pikapi.co:4001';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
