import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const ProjectMouseFollower = () => {
  const circleRef = useRef(null);
  useEffect(() => {
    const projectHandleMouseMove = (event) => {
      gsap.to(circleRef.current, {
        x: event.clientX - 30, // Adjust to center the circle on the cursor
        y: event.clientY - 30, // Adjust to center the circle on the cursor
        duration: 1.5,
        ease: 'elastic.out',
      });
    };
 
    window.addEventListener('mousemove', projectHandleMouseMove);

    return () => {
    window.removeEventListener('mousemove', projectHandleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: 'fixed    ',
    width: '80px',
    height: '80px',
    display: 'flex',
    fontSize: "1.2rem",
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:"600",
    opacity: 0.7,
    zIndex:9999,
    backgroundColor: '#fff',
    borderRadius: '50%',
    pointerEvents: 'none', // Prevents the circle from interfering with mouse events
  };

  return <div id="circle" ref={circleRef} style={circleStyle}>
    view
  </div>;
};

export default ProjectMouseFollower;
