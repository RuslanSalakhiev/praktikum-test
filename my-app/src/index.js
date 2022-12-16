import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { generateData } from './utils';


const data = generateData(576);
console.log(data);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
