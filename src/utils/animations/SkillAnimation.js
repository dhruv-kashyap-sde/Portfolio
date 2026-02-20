import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const SkillAnimation = () => {

   useGSAP(() => {
     let tl = gsap.timeline({
       scrollTrigger: {
         trigger: ".skills-container",
         start: "top 70%",
         end: "top 70%",
         scrub: 1,
         //markers:true       
},
     });
     tl.from("hr", {
       y: 300,
       duration: 1,
       ease: "power1.in",
     });

       tl.from('.skills-box', {
         x: -300,
         opacity: 0,
         duration: 1,
         ease: 'power3.in'
       })

       tl.to('.skills-box-2', {
        left: '0px',
         opacity: 1,
         duration: 1,
         ease: 'power3.in',
         delay: -1,
       })
   })
}

export default SkillAnimation