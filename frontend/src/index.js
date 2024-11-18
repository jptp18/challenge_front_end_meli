import React from 'react';
import ReactDOM from 'react-dom/client'; // Importación actualizada para React 18
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Método createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);