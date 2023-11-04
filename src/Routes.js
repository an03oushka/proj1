import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import App from './App';
import LoginHTML from './LoginHTML';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login.html" element={<LoginHTML />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
