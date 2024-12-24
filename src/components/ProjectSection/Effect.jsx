import React, { useEffect, useRef } from "react";
import "./Effect.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ProjectMouseFollower from "./ProjectMouseFollower";
import { Link } from "react-router-dom";
import ProjectSectionAnimation from "../../utils/animations/ProjectSectionAnimation";
import image1 from '../../assets/codequest.png'
import image2 from '../../assets/anz.png'
import image3 from '../../assets/aio.jpg'

function Effect() {
  ProjectSectionAnimation();
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);

  const urlStack = [
    image1,
    image2,
    image3,
  ];

  useEffect(() => {
    let lastX = 0;
    let resetTimeout; // Timeout to reset rotation
    const handleMouseMove = (event) => {
      clearTimeout(resetTimeout); // Clear previous timeout
      const rect = sectionRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Determine rotation based on cursor movement
      const rotateDeg = x > lastX ? 12 : -12;
      lastX = x;
      // Animate image position and rotation
      gsap.to(imgRef.current, {
        duration: 0.9,
        x: x - imgRef.current.offsetWidth / 2,
        y: y - imgRef.current.offsetHeight / 2,
        rotation: rotateDeg, // Change this line
        ease: "power3.out",
      });

      // Reset rotation after 100ms of no movement
      resetTimeout = setTimeout(() => {
        document.getElementById("effect-image").style.transform = "rotate(0deg)";
      }, 100);
    };

    const handleMouseLeave = () => {
      gsap.to(imgRef.current, {
        duration: 0.3,
        opacity: 0,
        ease: "power3.out",
      });
    };

    const handleMouseEnterContainer1 = () => {
      if (imgRef.current) {
        imgRef.current.src = urlStack[0];
        gsap.to(imgRef.current, {
          duration: 0.3,
          opacity: 1,
          ease: "power3.out",
        });
      }
    };

    const handleMouseEnterContainer2 = () => {
      if (imgRef.current) {
        imgRef.current.src = urlStack[1];
        gsap.to(imgRef.current, {
          duration: 0.3,
          opacity: 1,
          ease: "power3.out",
        });
      }
    };

    const handleMouseEnterContainer3 = () => {
      if (imgRef.current) {
        imgRef.current.src = urlStack[2];
        gsap.to(imgRef.current, {
          duration: 0.3,
          opacity: 1,
          ease: "power3.out",
        });
      }
    };

    // Add event listeners only if elements exist
    if (sectionRef.current) {
      sectionRef.current.addEventListener("mousemove", handleMouseMove);
      sectionRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    if (container1Ref.current) {
      container1Ref.current.addEventListener("mouseenter", handleMouseEnterContainer1);
    }
    if (container2Ref.current) {
      container2Ref.current.addEventListener("mouseenter", handleMouseEnterContainer2);
    }
    if (container3Ref.current) {
      container3Ref.current.addEventListener("mouseenter", handleMouseEnterContainer3);
    }

    // Cleanup function
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener("mousemove", handleMouseMove);
        sectionRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (container1Ref.current) {
        container1Ref.current.removeEventListener("mouseenter", handleMouseEnterContainer1);
      }
      if (container2Ref.current) {
        container2Ref.current.removeEventListener("mouseenter", handleMouseEnterContainer2);
      }
      if (container3Ref.current) {
        container3Ref.current.removeEventListener("mouseenter", handleMouseEnterContainer3);
      }
    };
  }, []);

  return (
    <>
      <div className="project-text main-text">
        <p>Recent <span className="italic-text">Projects</span></p>
      </div>
      <ProjectMouseFollower />
      <section className="effect-section main-text" ref={sectionRef}>
        <div className="effect-container" ref={container1Ref} onClick={() => window.open("https://codequest-frontend.onrender.com/", "_blank")} id="effect-container-1">
          <img
            ref={imgRef}
            src=""
            id="effect-image"
            alt="Effect Image"
            style={{
              position: "absolute",
              width: "500px",
              borderRadius: "10px",
              height: "350px",
              rotate: 0,
              opacity: 0,
              zIndex: 99999,
              pointerEvents: "none",
            }}
          />
          <h1>CodeQuest</h1>
          <p>2024</p>
        </div>
        <div className="effect-container" ref={container2Ref} onClick={() => window.open("https://github.com/dhruv-kashyap-sde/ANZ-products", "_blank")} id="effect-container-2">
          <h1>ANZ PRODUCTS</h1>
          <p>2024</p>
        </div>
        <div className="effect-container" ref={container3Ref} onClick={() => window.open("https://github.com/dhruv-kashyap-sde/AIO_Calculator", "_blank")} id="effect-container-3">
          <h1>AIO - Calc</h1>
          <p>2022</p>
        </div>

        <Link to="/project" ><button className="main-text basic-button">Show All</button></Link>
      </section>
    </>
  );
}

export default Effect;
