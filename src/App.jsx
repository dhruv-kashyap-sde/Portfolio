import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmoothScrolling from './utils/SmoothScrolling';
import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import MouseFollower from './utils/MouseFollower';
import Projectpage from './Pages/Projects/Projectpage';

const App = () => {
  return (
    <div className="app-wrapper">
      <SmoothScrolling>  
      <MouseFollower />
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<Projectpage/>} />
        </Routes>
      </Router>
      </SmoothScrolling>
      </div>

  )
}

export default App