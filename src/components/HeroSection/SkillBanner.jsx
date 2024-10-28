import React, { useEffect } from 'react'
import './SkillBanner.css'
import gsap from 'gsap'

const SkillBanner = () => {
    useEffect(() => {
        const handleDirection = (e) => {
            if (e.deltaY > 0) {
                gsap.to(".banner-icons", {
                    transform: "translateX(100%)",
                    duration:30,
                    ease:"none",
                    repeat:-1,
                    yoyo:true,
                })
            } else {
                gsap.to(".banner-icons", {
                    transform: "translateX(-100%)",
                    duration:30,
                    ease:"none",
                    repeat:-1,
                    yoyo:true,
                })
            }
            
        }
        window.addEventListener("wheel", handleDirection)

        return () => {
            window.removeEventListener('wheel', handleDirection);
          };
    }, [])
  return (
    <div className="banner-container">
        {/* <div className="banner-heading">
            <p><span className="italic-text">Skill </span><span className='main-text'>set</span></p>
            <hr />
        </div> */}
        <div className="banner-icons">
            <i class="ri-html5-fill"></i>
            <i class="ri-css3-fill"></i>
            <i class="ri-javascript-fill"></i>
            <img width="48" height="48" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>
            <i class="ri-database-2-fill"></i>
            <i class="ri-reactjs-fill"></i>
            <i class="ri-nodejs-fill"></i>
            <i class="ri-java-fill"></i>
            <i class="ri-html5-fill"></i>
            <i class="ri-css3-fill"></i>
            <i class="ri-javascript-fill"></i>
            <img width="48" height="48" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>
            <i class="ri-database-2-fill"></i>
            <i class="ri-reactjs-fill"></i>
            <i class="ri-nodejs-fill"></i>
            <i class="ri-java-fill"></i>

        </div>
    </div>
  )
}

export default SkillBanner