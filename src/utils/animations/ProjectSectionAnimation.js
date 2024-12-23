import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectSectionAnimation = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-text",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 2,
      },
    });

    tl.from(".project-text p", {
      y: 200,
      opacity: 0,
      duration: 1,
    });
    
  });

};

export default ProjectSectionAnimation;
