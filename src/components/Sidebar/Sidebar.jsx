import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar main-text">
        <button className='basic-button'><i class="ri-close-large-line"></i></button>
        <div className="sidebar_navigation">Home</div>
        <div className="sidebar_navigation">About</div>
        <div className="sidebar_navigation">Projects</div>
        <div className="sidebar_navigation">Contact</div>
  </div>
  )
}

export default Sidebar