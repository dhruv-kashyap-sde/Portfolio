import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container main-text'>
        <div className="box-links">
            <a href="home">Home</a>
            <a href="project">Projects</a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
        </div>
        <div className='box-logo'>
            <p className="logo">Dhruv Kashyap</p>
        </div>
        <div className="box-follow">
            <i class="ri-instagram-line"></i>
            <i class="ri-github-fill"></i>
            <i class="ri-linkedin-box-fill"></i>
        </div>
    </div>
  )
}

export default Footer
