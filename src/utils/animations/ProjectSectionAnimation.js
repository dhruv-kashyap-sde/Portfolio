import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const ProjectSectionAnimation = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.project-text',
                start:'top 100%',
                end:'top 10%',
                // markers:true,
                scrub:2
            }
        })
        tl.from('.project-text', {
            y:200,
            duration:4,
            ease:'power3.out'
        })

        tl.from('.project', {
            y:600,
            duration:3,
            ease:'power3.out',
            stagger:1
        })

        tl.from('.project-container .basic-button', {
            y:400,
            duration:1,
            ease:'power1.out',
        })
    })
    
}

export default ProjectSectionAnimation