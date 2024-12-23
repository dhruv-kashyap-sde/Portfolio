import React, { useEffect } from 'react'
import './SkillBanner.css'
import gsap from 'gsap'

const SkillBanner = () => {
    // useEffect(() => {
    //     const handleDirection = (e) => {
    //         if (e.deltaY > 0) {
    //             gsap.to(".banner-icons", {
    //                 transform: "translateX(100%)",
    //                 duration:30,
    //                 ease:"none",
    //                 repeat:-1,
    //                 yoyo:true,
    //             })
    //         } else {
    //             gsap.to(".banner-icons", {
    //                 transform: "translateX(-100%)",
    //                 duration:30,
    //                 ease:"none",
    //                 repeat:-1,
    //                 yoyo:true,
    //             })
    //         }
            
    //     }
    //     window.addEventListener("wheel", handleDirection)

    //     return () => {
    //         window.removeEventListener('wheel', handleDirection);
    //       };
    // }, [])

  return (
    <div className="banner-container">
        <div className="banner-icons">
            <i className="ri-html5-fill"></i>
            <i className="ri-css3-fill"></i>
            <i className="ri-javascript-fill"></i>
            <img width="48" height="48" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>
            <i className="ri-database-2-fill"></i>
            <i className="ri-reactjs-fill"></i>
            <i className="ri-nodejs-fill"></i>
            <i className="ri-java-fill"></i>
        </div>
        <div className="banner-icons">
            <i className="ri-html5-fill"></i>
            <i className="ri-css3-fill"></i>
            <i className="ri-javascript-fill"></i>
            <img width="48" height="48" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>
            <i className="ri-database-2-fill"></i>
            <i className="ri-reactjs-fill"></i>
            <i className="ri-nodejs-fill"></i>
            <i className="ri-java-fill"></i>
        </div>
    </div>
  )
}

export default SkillBanner