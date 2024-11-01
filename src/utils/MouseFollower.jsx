import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { difference } from 'three/webgpu';

const MouseFollower = () => {

  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
        gsap.to(circleRef.current, {
          x: event.clientX - 10, // Adjust to center the circle on the cursor
          y: event.clientY - 10, // Adjust to center the circle on the cursor
          duration: 1.5,
          ease: 'elastic.out',
        });
      };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: 'fixed    ',
    width: '20px',
    height: '20px',
    zIndex:10,
    backgroundColor: '#db0606',
    mixBlendMode:"difference",
    borderRadius: '50%',
    pointerEvents: 'none', // Prevents the circle from interfering with mouse events
  };

  return <div id="circle" ref={circleRef} style={circleStyle}></div>;
};

export default MouseFollower;
