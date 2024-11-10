import React from 'react'
import './Navbar.css'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const openSidebar = () => {
    gsap.to('.sidebar',{
      transform:'translateX(0%)',
    })
  }
  return (
    <nav className="navbar">
    <div className="logo pointer">Dhruv Kashyap</div>
    <div className="nav-links">
      <Link to="/">
        <button className="animated-button main-text">
          <span class="span-mother">
            <span>H</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </span>
          <span class="span-mother2">
            <span>H</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </span>
        </button>
      </Link>
      <Link to="/about">
        <button className="animated-button main-text">
          <span class="span-mother">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </span>
          <span class="span-mother2">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </span>
        </button>
      </Link>
      <Link to="/projects">
        <button className="animated-button main-text">
          <span class="span-mother">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
          </span>
          <span class="span-mother2">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
          </span>
        </button>
      </Link>
      <Link to="/contact">
        <button className="animated-button main-text">
          <span class="span-mother">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </span>
          <span class="span-mother2">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </span>
        </button>
      </Link>
    </div>
    <button onClick={openSidebar} className="hamburger basic-button"><i class="ri-menu-4-fill"></i></button>
  </nav>
  )
}

export default Navbar