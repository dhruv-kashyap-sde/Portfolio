import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ContactAnimation = () => {
  useGSAP(() => {
    gsap.from(
      ".marquee-text",
      {
        transform: "translateX(0%)",
        duration:20,
        ease:'linear',
        repeat:-1,
      }
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.form-container',
        start: 'top 70%',
        end: 'top center',
        scrub: 2,
      }
    })
    
    tl.from('.form-heading', {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: 'power3.in'
    })
    
    tl.from('.form-container form', {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: 'power3.in',
      delay: -1,
    })
    
  });
};

export default ContactAnimation;
