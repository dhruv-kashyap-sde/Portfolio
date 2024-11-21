import React from 'react'
import './AboutPage.css'
import Navbar from '../../components/Navbar'
import Footer from '../../utils/Footer';

const AboutPage = () => {
    
  return (
    <>
      <div className='about-page-container main-text'>
        <Navbar/>
        <div className="about-heading">
          <h3 className='italic-text'>About</h3>
          <div className="about-line-container">
            <h1><span>D</span>hruv</h1>
            <h1><span>K</span>ashyap</h1>
          </div>
        </div>
        <div className="about-body">
          <p>As an enthusiastic <span className='italic-text'>MERN stack developer</span>, my expertise is in crafting animated and contemporary websites and web applications that engage users and elevate their online experience. Grounded in <span className='italic-text'>MongoDB, Express.js, React, and Node.js</span>, I excel in bringing to life innovative initiatives such as <span className='italic-text'>CodeQuest</span>. My skill set is centered around creating dynamic user interfaces, integrating seamless backend systems, and implementing interactive elements that ensure each application is both operational and aesthetically pleasing. My commitment lies in constructing sturdy platforms and <span className='italic-text'>developing captivating web solutions</span>, all while ensuring the delivery of top-tier, scalable, and intuitive applications that distinguish themselves in the digital realm.</p>
        </div>
        <div className="about-education">
          <div className="education-left">
            <h1>My <span className='italic-text'>Journey</span></h1>
          </div>
          <div className="education-right">
            <div className="container">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutPage