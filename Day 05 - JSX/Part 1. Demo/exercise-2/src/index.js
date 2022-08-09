import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Chim to nhất lớp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);