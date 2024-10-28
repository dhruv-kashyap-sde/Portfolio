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

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".banner-container",
                scroller: "body",
                scrub:2,
                // markers:true,
                start:"top 80%",
                end: "top 50%"

            }
        })
        tl2.from(".banner-heading", {
            y:200,
            duration:2,
            ease: "power4.out",
        })

        tl2.from(".banner-icons", {
            opacity:0,
            duration:1
        })
        
    })
    
}

export default HomepageAnimation