import React, { useState } from "react";
import "./HeroSection.css";
import "./Semicircle.css";
import ID_card from "../ID_card/ID_card";
import HomepageAnimation from "../../utils/animations/HomepageAnimation";
import Semicircle from "./Semicircle";
import SkillBanner from "./SkillBanner";
import gsap from "gsap";
import Navbar from "../Navbar";

const HeroSection = () => {

  
  HomepageAnimation();
  return (
    <>
      <div className="hero-section main-text">
        <Semicircle />
        <Navbar/>
        <div id="home" className="left-right-container">

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
          <div className="hero-section-right">
            <p className="scroll-down-icon"><i class="ri-arrow-down-double-line "></i></p>
          </div>
        </div>

      </div>
      <SkillBanner />
    </>
  );
};

export default HeroSection;
