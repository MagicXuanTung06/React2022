import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AddComponent />);
