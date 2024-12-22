import React, { useEffect, useRef } from "react";
import "./Effect.css";
import { gsap } from "gsap";
import ProjectMouseFollower from "./ProjectMouseFollower";

function Effect() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const urlStack = [
    "https://images.unsplash.com/photo-1733103373160-003dc53ccdba?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733591486986-2a9c1086c5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1732823130947-ac30acee3e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
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
        rotation: `${rotateDeg}deg`,
        ease: "power3.out",
      });

      // Reset rotation after 300ms of no movement
      resetTimeout = setTimeout(() => {
        gsap.to(imgRef.current, {
          duration: 0.5,
          rotation: 0,
          ease: "power3.out",
        });
      }, 300);
    };

    const handleMouseEnterContainer1 = () => {
      imgRef.current.src = urlStack[0];
    };
    const handleMouseEnterContainer2 = () => {
      imgRef.current.src = urlStack[1];
    };
    const handleMouseEnterContainer3 = () => {
      imgRef.current.src = urlStack[2];
    };

    const container1 = document.getElementById("effect-container-1");
    container1.addEventListener("mouseenter", handleMouseEnterContainer1);
    const container2 = document.getElementById("effect-container-2");
    container2.addEventListener("mouseenter", handleMouseEnterContainer2);
    const container3 = document.getElementById("effect-container-3");
    container3.addEventListener("mouseenter", handleMouseEnterContainer3);

    sectionRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      sectionRef.current.removeEventListener("mousemove", handleMouseMove);
      container1.removeEventListener("mouseenter", handleMouseEnterContainer1);
      container2.removeEventListener("mouseenter", handleMouseEnterContainer2);
      container3.removeEventListener("mouseenter", handleMouseEnterContainer3);
    };
  }, []);

  return (
    <>
      <ProjectMouseFollower />
      <section className="effect-section" ref={sectionRef}>
        <div className="effect-container" id="effect-container-1">
          <img
            ref={imgRef}
            src=""
            alt="Effect Image"
            style={{
              position: "absolute",
              width: "350px",
              borderRadius: "10px",
              height: "350px",
              rotate:0,
              zIndex: 9,
              pointerEvents: "none",
            }}
          />
          <h1>Effect</h1>
          <p>2023</p>
        </div>
        <div className="effect-container" id="effect-container-2">
          <h1>Effect</h1>
          <p>2024</p>
        </div>
        <div className="effect-container" id="effect-container-3">
          <h1>Effect</h1>
          <p>2025</p>
        </div>
      </section>
    </>
  );
}

export default Effect;
