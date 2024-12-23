import React, { useEffect, useRef } from "react";
import "./Effect.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ProjectMouseFollower from "./ProjectMouseFollower";
import { Link } from "react-router-dom";
import ProjectSectionAnimation from "../../utils/animations/ProjectSectionAnimation";

function Effect() {
  ProjectSectionAnimation();
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const urlStack = [
    "/src/assets/CodeQuest.png",
    "/src/assets/ANZ.png",
    "/src/assets/AIO.jpg",
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
      imgRef.current.src = urlStack[0];
      gsap.to(imgRef.current, {
        duration: 0.3,
        opacity: 1,
        ease: "power3.out",
      });
    };
    const handleMouseEnterContainer2 = () => {
      imgRef.current.src = urlStack[1];
      gsap.to(imgRef.current, {
        duration: 0.3,
        opacity: 1,
        ease: "power3.out",
      });
    };
    const handleMouseEnterContainer3 = () => {
      imgRef.current.src = urlStack[2];
      gsap.to(imgRef.current, {
        duration: 0.3,
        opacity: 1,
        ease: "power3.out",
      });
    };

    const container1 = document.getElementById("effect-container-1");
    container1.addEventListener("mouseenter", handleMouseEnterContainer1);
    const container2 = document.getElementById("effect-container-2");
    container2.addEventListener("mouseenter", handleMouseEnterContainer2);
    const container3 = document.getElementById("effect-container-3");
    container3.addEventListener("mouseenter", handleMouseEnterContainer3);

    sectionRef.current.addEventListener("mouseleave", handleMouseLeave);
    sectionRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      sectionRef.current.removeEventListener("mouseleave", handleMouseLeave);
      sectionRef.current.removeEventListener("mousemove", handleMouseMove);
      container1.removeEventListener("mouseenter", handleMouseEnterContainer1);
      container2.removeEventListener("mouseenter", handleMouseEnterContainer2);
      container3.removeEventListener("mouseenter", handleMouseEnterContainer3);
    };
  }, []);

  const handleClickContainer1 = () => {
    window.open("https://codequest-frontend.onrender.com/", "_blank");
  };
  const handleClickContainer2 = () => {
    window.open("https://github.com/dhruv-kashyap-sde/ANZ-products", "_blank");
  };
  const handleClickContainer3 = () => {
    window.open("https://github.com/dhruv-kashyap-sde/AIO_Calculator", "_blank");
  };

  return (
    <>
    <div className="project-text main-text">
          <p>
            Recent <span className="italic-text">Projects</span>
          </p>
        </div>
      <ProjectMouseFollower />
      <section className="effect-section main-text" ref={sectionRef}>
        <div className="effect-container" onClick={handleClickContainer1} id="effect-container-1">
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
        <div className="effect-container" onClick={handleClickContainer2} id="effect-container-2">
          <h1>ANZ PRODUCTS</h1>
          <p>2024</p>
        </div>
        <div className="effect-container" onClick={handleClickContainer3} id="effect-container-3">
          <h1>AIO</h1>
          <p>2022</p>
        </div>

        <Link to="/project" ><button className="main-text basic-button">Show All</button></Link>
      </section>
    </>
  );
}

export default Effect;
