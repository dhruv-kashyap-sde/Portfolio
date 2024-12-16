import React from 'react'
import './Sidebar.css'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const closeSidebar = () => {
        gsap.to('.sidebar',{
          transform:'translateX(100%)',
      })
    }
    const navigate = useNavigate();
    const refer = (path) => {
      navigate(path);
      closeSidebar();
    }
  return (
    <div className="sidebar main-text">
        <button onClick={closeSidebar} className='basic-button'><i class="ri-close-large-line"></i></button>
        <div onClick={() => refer("/")} className="sidebar_navigation">Home</div>
        <div onClick={() => refer("/about")} className="sidebar_navigation">About</div>
        <div onClick={() => refer("/projects")} className="sidebar_navigation">Projects</div>
  </div>
  )
}

export default Sidebar