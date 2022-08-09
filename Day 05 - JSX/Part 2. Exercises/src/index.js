import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import Exercise1 from './components/Exercise1';
import Exercise3 from './components/Exercise3';



//Exercise 1:
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Exercise1 />);


// Exercise 3
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Exercise3 />);

