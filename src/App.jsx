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
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className='app-wrapper'>
      <SmoothScrolling>
        <MouseFollower/>
        {visible &&
          <Sidebar />
        }
        <HeroSection/>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
      </SmoothScrolling>
    </div>
  )
}

export default App