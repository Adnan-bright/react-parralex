import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import * as style from '../../styles/components/aboutUs.module.css'
// import MouseTracker from '../hooks/MouseTracker';
import { useInView } from "react-intersection-observer";
import UseMouseGesture from './useMouseGesture';
function AboutUS({ isMobile }) {
    const [ref, isVisible] = useInView({ threshold: 0.7 });
    const myRef = useRef()
    const {bind} = UseMouseGesture('aboutCrossBg',myRef )
  
    gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".aboutUsMainContent",
    //             scrub: 2,
    //             markers: false,
    //             start: "left right"
    //         }
    //     });
    //     tl.to(".pImage", { filter: "blur(3px)", opacity: 0.5, xPercent: 0, duration: 8, ease: "none", })
    //     tl.to(".pImage", { filter: "blur(0px)", opacity: 1, xPercent: -40, duration: 4, ease: "none", })

    // }, [])
    return (
        <div {...bind()}  ref={myRef}>
            {
                isMobile ?
                    <div className={`${style.mblMain}  `}>
                        <div className={`${style.mblBgCross}  `}>
                            <img src='/images/about-us/mblCross.png' />
                        </div>
                        <div
                            className={`${style.mblBody} `}>
                            <div
                                className={style.mblTextContainer}
                            >
                                <p className={style.mblTitle}>About us</p>
                                <p className={style.mblParagraph}>We build creative experiences.<br />
                                    As a Dallas based studio that utilizes multiple<br />
                                    disciplines to pioneer new ideas through film,<br />
                                    design, and creative technology.<br />
                                    Our goal is your success.
                                </p>
                            </div>
                        </div>

                    </div>
                    :
                    <div ref={ref}  className={`${style.main} bgImageAbout `}>
                          <div className='meinContainerAnimated'>
                          <div 
                                className={`${style.bgCross}   aboutCrossBg cube`}>
                               <div className='first'>
                               <img className='pImage' src='/images/about-us/cross.png' />
                               </div>
                               <div className='second'>
                               <img className='pImage' src='/images/about-us/cross.png' />
                               </div>
                               <div className='third'>
                               <img className='pImage' src='/images/about-us/cross.png' />
                               </div>
                               <div className='fourth'>
                               <img className='pImage' src='/images/about-us/cross.png' />
                               </div>
                               <div className='fifth'>
                               <img className='pImage' src='/images/about-us/cross.png' />
                               </div>
                               <div className='sixth'>
                               <img className='pImage' src='/images/about-us/cross.png' />
                               </div>
                            </div>
                          </div>
                        <div
                            style={{
                                marginLeft: "-30px"
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
            }
        </div>
    )
}

export default AboutUS