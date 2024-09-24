// src/index.ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx'; // This is correct

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // Make sure this matches your HTML element
);
