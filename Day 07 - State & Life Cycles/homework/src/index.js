import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Child from './components/Child';
import Toggle from './components/Toggle';
import FormC from './components/FormC';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoCard from './components/TodoCard';
import CardManager from './components/CardManager';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CardManager />);

