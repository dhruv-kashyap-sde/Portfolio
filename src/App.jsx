import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmoothScrolling from './utils/SmoothScrolling';
import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage';

const App = () => {
  return (
    <div className="app-wrapper">
      <SmoothScrolling>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </SmoothScrolling>
      </div>

  )
}

export default App