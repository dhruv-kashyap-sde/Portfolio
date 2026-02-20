import React from 'react'
import './AboutSection.css'
import AboutAnimation from '../../utils/animations/AboutAnimation'
import { Link } from 'react-router-dom'
import image from '../../assets/pfp.jpg'

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
              <p>Skilled and Self-taught Developer from <span className="highlight-text">India</span> with a strong background in web application development. Skilled in <span className="highlight-text">JavaScript, HTML, CSS, React.js and Node.js</span> and DSA with Java. Committed to creating and deploying innovative and scalable web and mobile solutions.</p>
            </div>
            <Link to={"/about"}>
              <button className='basic-button'> Know More</button>
            </Link> 
          </div>
        </div>
        <div className="right">
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default AboutSection