import React, { useEffect, useRef } from "react";
import "./ContactSection.css";
import gsap from "gsap";
import ContactAnimation from "../../utils/animations/ContactAnimation";

const ContactSection = () => {
  
  ContactAnimation();
  return (
    <div id="contact" className="main5">
      <div className="marquee-text-container main-text">
        <div className="marquee-text">
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
        </div>
        <div className="marquee-text">
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
        </div>
      </div>
      <div className="form-container">
        <div className="form-heading">
          <p className="main-text">Contact <span className="italic-text">Me</span></p>
          <a href="src\assets\Resume-Dhruv.pdf" download="Resume-Dhruv.pdf"><button className="basic-button">Download&nbsp; Resume</button></a>
        </div>
        <form action="">
          <input type="text" placeholder="Full Name"/>
          <input type="email" name="" id="" placeholder="Email"/>
          <textarea name="" id="" placeholder="Your message"></textarea>
          <button type="submit" className="basic-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
