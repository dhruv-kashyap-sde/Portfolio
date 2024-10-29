import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const FooterAnimation = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer-container',
                start: 'top 70%',
                end: '40% 70%',
                scrub:1

            }
        })
        tl.from('.box-links, .box-logo, .box-follow', {
            y:300,
            ease: 'power3',
            duration:2,
            opacity: 0
        })
        tl.from('.footer-text', {
            opacity:1,
            duration:1,
            ease: 'power2'
        })
      
    })
}

export default FooterAnimation