import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const HomepageAnimation = () => {

    useGSAP(() => {
        gsap.from("nav", {
            y: -100,
            duration:1,
            opacity:0,  
            ease: "power4.out",
        })

        gsap.to(".semicircle",{
            scale: 1.8,
            duration:3,
            opacity:0,
            repeat:-1
        })

        gsap.to('.scroll-down-icon', {
            y: 20,
            repeat: -1,
            yoyo: true,
            ease: 'power3.inOut',
            duration: 1.5,
            opacity:0
        });

        gsap.from(".line-container span", {
            opacity:0,
            transform:"translateY(100%)",
            duration:1.2,
            ease: "power4.out",
            delay:1,
        })

        let tl = gsap.timeline();
        tl.from(".line-container p", {
            delay:1,
            transform: "translateY(100%)",
            duration:1.2,
            stagger: .2,
            opacity:0,
            ease: "power4.out",
        })

        gsap.from(
            ".banner-icons",
            {
              transform: "translateX(0%)",
              duration:10,
              ease:'linear',
              repeat:-1,
            }
        );
        
    })
    
}

export default HomepageAnimation