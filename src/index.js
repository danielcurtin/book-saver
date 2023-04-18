import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App.js';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);