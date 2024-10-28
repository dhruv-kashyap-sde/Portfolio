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
  });
};

export default ContactAnimation;
