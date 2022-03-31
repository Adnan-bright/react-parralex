import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import * as style from '../../styles/components/aboutUs.module.css'
import MouseTracker from '../hooks/MouseTracker';
function AboutUS({ isMobile }) {
    const ref = useRef()
    gsap.registerPlugin(ScrollTrigger);
    MouseTracker('cube', ref, 60, -70, 4)
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
        <div ref={ref}>
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
                                <p  className={style.mblParagraph}>We build creative experiences.<br />
                                    As a Dallas based studio that utilizes multiple<br />
                                    disciplines to pioneer new ideas through film,<br />
                                    design, and creative technology.<br />
                                    Our goal is your success.
                                    <br />
                                   
                                </p>
                            </div>
                        </div>

                    </div>
                    :
                    <div>
                    <div className={`${style.main} bgImageAbout `}>
                          <div className='meinContainerAnimated'>
                          <div id='cube'
                                className={`${style.bgCross}  aboutCrossBg`}>
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
                    <div className={style.bgBoxes}>
                                    <div className={style.boxesContainer}>
                                        <div className={style.containerRow1}>
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow2}>
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow3}>
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow4}>
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img style={{opacity:'0'}} className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                            <img style={{opacity:'0'}} className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow5}>
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow6}>
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow5}>
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                        </div>
                                        <div className={style.containerRow6}>
                                            <img className={`${style.firstBox} ${style.mdmBox}`} src='/images/services/box.png' />
                                            <img style={{opacity:'0'}} className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                            <img className={`${style.firstBox} ${style.lrgBox}`} src='/images/services/box.png' />
                                            <img style={{opacity:'0'}} className={`${style.firstBox} ${style.smallBox}`} src='/images/services/box.png' />
                                        </div>
                                    </div>
                                </div>
                    </div>
            }
        </div>
    )
}

export default AboutUS