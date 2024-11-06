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
import AboutPage from './Pages/About/AboutPage'

const App = () => {
  return (
    <div className='app-wrapper'>
      <SmoothScrolling>
        <MouseFollower/>
         <Sidebar />
        {/* <HeroSection/>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/> */}
        <AboutPage/>
        <Footer/>
      </SmoothScrolling>
    </div>
  )
}

export default App