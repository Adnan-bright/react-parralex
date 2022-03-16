import React, { useEffect, useRef } from 'react'
import * as style from '../../styles/components/aboutUs.module.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function AboutUS() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutCrossBg .bgImageAbout",
                scrub: 2,
                markers: false
            }
        });
        tl.to(".aboutCrossBg", {rotateZ:120, duration: 6,ease: "power2.out"})
        tl.to(".aboutCrossBg", {rotateZ:360, duration: 6,ease: "power2.out"})


    }, [])
    return (
        <div className={`${style.main} bgImageAbout `}>
            <div className={`${style.bgCross}  aboutCrossBg`}>
                <img className='pImage' src='/images/about-us/cross.png' />
            </div>
            <div
            style={{
                marginLeft:"-30px"
            }}
                className={`${style.body} aboutUsMainContent`}>
                <p className={style.title}>About us</p>
                <p className={style.paragraph}>We build creative experiences.<br />
                    As a Dallas based studio that utilizes multiple<br />
                    disciplines to pioneer new ideas through film,<br />
                    design, and creative technology.<br />
                    Our goal is your success.
                </p>
            </div>

        </div>
    )
}

export default AboutUS