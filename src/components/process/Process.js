import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/process.module.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Process() {
    const [hover, setHover] = useState('')
  gsap.registerPlugin(ScrollTrigger);
    

    // useEffect(() => {

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".processMidRow  .processMainContainer",
    //             scrub: 2,
    //             markers: false
    //         }
    //     });
    //     const tl2 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".processBtmRow  .processMainContainer",
    //             scrub: 2,
    //             markers: false
    //         }
    //     });
    //     const tl3 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".processTopRow  .processMainContainer",
    //             scrub: 2,
    //             markers: false
    //         }
    //     });


    //     tl.to(".processMidRow", { xPercent: 25, duration: 8, ease: "power2.out" })
    //     tl.to(".processMidRow", { xPercent: -15, duration: 6, ease: "power2.out" })

    //     tl2.to(".processBtmRow", { xPercent: 25, duration: 8, ease: "power2.out" })
    //     tl2.to(".processBtmRow", { xPercent: 125, duration: 6, ease: "power2.out" })

    //     tl3.to(".processTopRow", { xPercent: 25, duration: 8, ease: "power2.out" })
    //     tl3.to(".processTopRow", { xPercent: 40, duration: 6, ease: "power2.out" })
    // }, [])
    return (
        <div className={`${style.main} processMainContainer`}>
            <h1 className={style.heading}>
                OUR PROCESS
            </h1>
            <div
                // style={{
                //     marginLeft: "-625px"
                // }}
                className={`${style.topRow} processTopRow`}>
                <div

                    className={hover === '' ? `${style.imageContainer5} processContainer1` : hover === 'expansion' ? `${style.imageContainer5Active} ` : `${style.imageContainer5Blur} `}

                >
                    <div
                        onMouseEnter={() => setHover('expansion')}
                        onMouseLeave={() => setHover('')}
                        className={`${style.bgContainer} `}>
                        <div className={`${style.dataContainer} processDataContainer`}>
                            <img

                                className={style.imgItem}
                                src='/images/process/icon5.webp' />
                            <p
                                className={style.imageText}
                            >Expansion</p>
                            <p className={hover === 'expansion' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                // style={{
                //     marginLeft: "170px"
                // }}
                className={`${style.midRow} processMidRow`}>
                <div

                    className={hover === '' ? `${style.imageContainer3} ` : hover === 'planning' ? style.imageContainer3Active : style.imageContainer3Blur}>

                    <div
                        onMouseEnter={() => setHover('planning')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon2.webp' />
                            <p

                                className={style.imageText}>Planning</p>
                            <p className={hover === 'planning' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>

                    </div>

                </div>
                <div

                    className={hover === '' ? style.imageContainer4 : hover === 'deployment' ? style.imageContainer4Active : style.imageContainer4Blur}
                >
                    <div
                        onMouseEnter={() => setHover('deployment')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon4.webp' />
                            <p

                                className={style.imageText}>Deployment</p>
                            <p className={hover === 'deployment' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div
                // style={{
                //     marginLeft: "-1840px"
                // }}
                className={`${style.bottomRow} processBtmRow`}>
                <div

                    className={hover === '' ? style.imageContainer1 : hover === 'ideation' ? style.imageContainer1Active : style.imageContainer1Blur}
                >
                    <div
                        onMouseEnter={() => setHover('ideation')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon1.webp' />
                            <p

                                className={style.imageText}>Ideation</p>
                            <p className={hover === 'ideation' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>

                    </div>

                </div>
                <div

                    className={hover === '' ? style.imageContainer2 : hover === 'creation' ? style.imageContainer2Active : style.imageContainer2Blur}>

                    <div
                        onMouseEnter={() => setHover('creation')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon3.webp' />
                            <p

                                className={style.imageText}>Creation</p>
                            <p className={hover === 'creation' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Process