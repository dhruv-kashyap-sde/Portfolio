import React from "react";
import "./Sidebar.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const closeSidebar = () => {
    gsap.to(".sidebar", {
      transform: "translateX(100%)",
    });
  };
  const navigate = useNavigate();
  const refer = (path) => {
    navigate(path);
    closeSidebar();
  };
  return (
    <>
      <div className="sidebar main-text">
        <button onClick={closeSidebar} className="basic-button">
          <i className="ri-close-large-line"></i>
        </button>
        <div onClick={() => refer("/")} className="sidebar_navigation">
          Home
        </div>
        <div onClick={() => refer("/about")} className="sidebar_navigation">
          About
        </div>
        <div onClick={() => refer("/projects")} className="sidebar_navigation">
          Projects
        </div>
        <div className="sidebar_navigation">
          <a href="Resume_Dhruv.pdf" download="Resume_Dhruv.pdf">
            Resume
          </a>
        </div>
        <div className="sidebar-box-follow">
                <a target='_blank' href="https://instagram.com/_dhruv.kashyap_/"><i className="ri-instagram-line"></i></a> 
                <a target='_blank' href="https://github.com/dhruv-kashyap-sde"><i className="ri-github-fill"></i></a> 
                <a target='_blank' href="https://www.linkedin.com/in/dhruv-kashyap-a5a006250"><i className="ri-linkedin-box-fill"></i></a> 
            </div>
      </div>
    </>
  );
};

export default Sidebar;
