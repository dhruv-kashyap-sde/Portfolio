import React from 'react'
import './AboutSection.css'
import AboutAnimation from '../../utils/animations/AboutAnimation'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  AboutAnimation();
  return (
    <div id='about' className='main4 main-text'>
      <div className="about-semicircle-container">
        <div className="about-semicircle"></div>
      </div>
      <div className="left-right-container">
        <div className="left">
          <div className="heading-container">
            <div className="line1">
              <p>About <span className='italic-text'>Me</span></p>
            </div>
            <div className="line2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur blanditiis ut maiores accusamus earum odio, temporibus omnis, minima aliquam atque veniam similique magni eveniet possimus?</p>
            </div>
            <Link to={"/about"}>
              <button className='basic-button'> Know More</button>
            </Link> 
          </div>
        </div>
        <div className="right">
          <img src="https://i.pinimg.com/736x/58/3d/20/583d20fbb0135c5cf2c6719bce06921a.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection