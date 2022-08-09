import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "MagicXuanTung";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement("h1", { style: { textAlign: "center" } }, name)
);
