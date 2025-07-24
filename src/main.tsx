// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ✅ This must be imported for Tailwind to work

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

