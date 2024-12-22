import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const AboutAnimation = () => {
    useGSAP(() => {
    gsap.to('.about-semicircle',{
        scale:2,
        duration:5,
        repeat:-1,
        opacity:0
    })
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.main4',
                start:'top 50%',
                end:'top 10% ',
                // markers:true,
                scrub:2
            }
        });
        tl.add('start')

        tl.to('.heading-container .line1 p', {
            transform:'translateY(0%)',
            ease: "power3.out",
            duration:2
        }, "start")

        tl.to('.main4 .right img', {
            opacity:1,
            duration:1.5,
            ease: "power3.out",
           left: "0px",
        }, "start")

        tl.from('.heading-container .line2 p', {
            transform:'translateX(100%)',
            opacity:0,
            ease: "power3.out",
            duration:2,
            ease:'power3.out'
        })
    })
}

export default AboutAnimation