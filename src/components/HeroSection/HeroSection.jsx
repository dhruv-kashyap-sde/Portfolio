import React, { useState } from "react";
import "./HeroSection.css";
import "./Semicircle.css";
import ID_card from "../ID_card/ID_card";
import HomepageAnimation from "../../utils/animations/HomepageAnimation";
import Semicircle from "./Semicircle";
import SkillBanner from "./SkillBanner";
import gsap from "gsap";

const HeroSection = () => {

  const openSidebar = () => {
    gsap.to('.sidebar',{
      transform:'translateX(0%)',
    })
  }
  
  HomepageAnimation();
  return (
    <>
      <div className="hero-section main-text">
        <Semicircle />
        <nav className="navbar">
          <div className="logo pointer">Dhruv Kashyap</div>
          <div className="nav-links">
            <a href="">
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
            </a>
            <a href="">
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
            </a>
            <a href="">
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
            </a>
            <a href="">
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
            </a>
          </div>
          <button onClick={openSidebar} className="hamburger basic-button"><i class="ri-menu-4-fill"></i></button>
        </nav>
        <div className="hero-section-left">
          <div className="line1 line-container">
            <span className="italic-text">I'm a</span>
            <p>Full-stack</p>
          </div>
          <div className="line2 line-container">
            <p>Developer</p>
            <span className="italic-text">and</span>
          </div>
          <div className="line3 line-container">
            <p>Software</p>
          </div>
          <div className="line4 line-container">
            <p>Engineer</p>
          </div>
        </div>
      </div>
      <SkillBanner />
    </>
  );
};

export default HeroSection;
