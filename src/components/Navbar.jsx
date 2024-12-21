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
      <a href="src\assets\Resume-Dhruv.pdf" download="Resume-Dhruv.pdf">
        <button className="animated-button main-text">
          <span class="span-mother">
            <span>R</span>
            <span>e</span>
            <span>s</span>
            <span>u</span>
            <span>m</span>
            <span>e</span>
          </span>
          <span class="span-mother2">
            <span>R</span>
            <span>e</span>
            <span>s</span>
            <span>u</span>
            <span>m</span>
            <span>e</span>
          </span>
        </button>
      </a>

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
      <a href="#projects">
        <button className="animated-button main-text">
          <span class="span-mother">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </span>
          <span class="span-mother2">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </span>
        </button>
      </a>
    </div>
    <button onClick={openSidebar} className="hamburger basic-button"><i class="ri-menu-4-fill"></i></button>
  </nav>
  )
}

export default Navbar