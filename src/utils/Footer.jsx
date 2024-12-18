import React from 'react'
import './Footer.css'
import FooterAnimation from './animations/FooterAnimation'
import { Link } from 'react-router-dom';

const Footer = () => {
    FooterAnimation();
  return (
    <>
    <div className='footer-container main-text'>
        <div className="footer-box-container">
            <div className="box-links">
                <a href="home">Home</a>
                <a href="project">Projects</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </div>
            <div className='box-logo'>
                <p className="logo">D K</p>
            </div>
            <div className="box-follow">
            <a target='_blank' href="https://instagram.com/_dhruv.kashyap_/"><i class="ri-instagram-line"></i></a> 
            <a target='_blank' href="https://github.com/dhruv-kashyap-sde"><i class="ri-github-fill"></i></a> 
            <a target='_blank' href="https://www.linkedin.com/in/dhruv-kashyap-a5a006250"><i class="ri-linkedin-box-fill"></i></a> 
                              
                <i class=""></i>
            </div>
        </div>
        <div className="main-text footer-bottom">
            <p className='footer-text'>
                <span><i class="ri-copyright-line"></i> 2025</span>
                <span>Dhruv Kashyap</span>
                <span>All Rights Reserved.</span>
            </p>
        </div>
    </div>
    </>
  )
}

export default Footer
