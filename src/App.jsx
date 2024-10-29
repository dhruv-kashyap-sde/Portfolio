import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import AboutSection from './components/AboutSection/AboutSection'
import MouseFollower from './utils/MouseFollower'
import SmoothScrolling from './utils/SmoothScrolling'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './utils/Footer'

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className='app-wrapper'>
      <SmoothScrolling>
        <MouseFollower/>
        <HeroSection/>
        {visible &&
          <>
            <div className="sidebar main-text">
              <button className='basic-button'><i class="ri-close-large-line"></i></button>
              <div className="sidebar_navigation">Home</div>
              <div className="sidebar_navigation">About</div>
              <div className="sidebar_navigation">Projects</div>
              <div className="sidebar_navigation">Contact</div>
            </div>
          </>}
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
      </SmoothScrolling>
    </div>
  )
}

export default App