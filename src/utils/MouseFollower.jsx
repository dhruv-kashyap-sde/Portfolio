import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { difference } from 'three/webgpu';

const MouseFollower = () => {
  // useEffect(() => {
  //   const circle = document.getElementById('circle');

  //   const handleMouseMove = (event) => {
  //     gsap.to(circle, {
  //       x: event.clientX - 10, // Adjust to center the circle on the cursor
  //       y: event.clientY - 10, // Adjust to center the circle on the cursor
  //       duration: 0.1,
  //       ease: 'power2.out',
  //     });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  const circleRef = useRef(null);
  const timeoutRef = useRef(null);
  const xPrevRef = useRef(0);
  const yPrevRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
        gsap.to(circleRef.current, {
          x: event.clientX - 10, // Adjust to center the circle on the cursor
          y: event.clientY - 10, // Adjust to center the circle on the cursor
          duration: 0.5,
          ease: 'power3.out',
        });
      clearTimeout(timeoutRef.current);

      const xPrev = xPrevRef.current;
      const yPrev = yPrevRef.current;

      const xScale = gsap.utils.clamp(0.8, 1.2, event.clientX - xPrev);
      const yScale = gsap.utils.clamp(0.8, 1.2, event.clientY - yPrev);

      xPrevRef.current = event.clientX;
      yPrevRef.current = event.clientY;

      mouseFollow(xScale, yScale);

      timeoutRef.current = setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1, 1)`;
        }
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const mouseFollow = (xScale, yScale) => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        scaleX: xScale,
        scaleY: yScale,
        ease: 'power2.out',
      });
    }
  };
  const circleStyle = {
    position: 'fixed    ',
    width: '20px',
    height: '20px',
    zIndex:10,
    backgroundColor: 'red',
    mixBlendMode:"difference",
    borderRadius: '50%',
    pointerEvents: 'none', // Prevents the circle from interfering with mouse events
  };

  return <div id="circle" ref={circleRef} style={circleStyle}></div>;
};

export default MouseFollower;
