import React, { useState, useRef, useEffect } from 'react'
import * as style from '../../styles/components/service1.module.css'
import ReactPlayer from 'react-player'
import VideoCloseIcon from '../../../static/icons/videoClose.png'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Service1() {
    
    const [whichCard, setWhichCard] = useState('')
    const [video, setVideo] = useState('')
    const ref = useRef(null)

    useEffect(() => {
        ScrollTrigger.refresh()
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".panel ",
                scrub: 5,
                markers: false
            }
        });
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".serviceCard1 .serviceMainContainer",
                scrub: 2,
                markers: false
            }
        });
        
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".serviceCard2 .serviceMainContainer",
                scrub: 2,
                markers: false
            }
        });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".serviceCard3 .serviceMainContainer",
                scrub: 2,
                markers: false,
            }
        });

        tl.to(".serviceBoxesBg", { xPercent: 200, filter: "blur(8px)", duration: 9, ease: "power2.out" })
        tl.to(".serviceBoxesBg", { xPercent: 0, filter: "blur(0px)", duration: 7, ease: "power2.out" })

        tl1.to(".serviceCard1", { rotateY: 180, duration: 12, ease: "power2.out" })
        tl1.to(".serviceCard1", { rotateY: 480, duration: 30, ease: "power2.out" })
        tl1.to(".serviceCard1", { rotateY: 360, duration: 5, ease: "power2.out" })

        tl2.to(".serviceCard2", { rotateY: 360, duration: 12, ease: "power2.out" })
        tl2.to(".serviceCard2", { rotateY: 180, duration: 20, ease: "power2.out" })

    

        tl3.to(".serviceCard3", { rotateY: 360, duration: 12, ease: "power2.out" })
        tl3.to(".serviceCard3", { rotateY: 180, duration: 18, ease: "power2.out" })

    }, [])
    return (
        <div
            className={`${style.main} serviceMainContainer `}
        >
            <div
                style={{
                    display: video ? 'flex' : "none",
                }}
                className={style.videoBody}>
                <div className={style.videoContainer}

                >
                    <div

                        className={style.videoBox}
                    >
                        <img

                            onClick={() => setVideo('')}

                            className={style.videoCloseIcon} src={VideoCloseIcon} alt='VideoCloseIcon' />
                        <ReactPlayer
                            ref={ref}
                            playing={true}
                            loop={false}
                            height='100%'
                            width={'100%'}
                            className={style.video}
                            url={video}
                            title={video}
                            controls={false}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={`${style.bgBoxes} serviceBoxesBg`}>
                        <img src='/images/about-us/boxes.png' />
                    </div>
                    <div
                    >
                        <h1 className={style.heading}>services</h1>
                    </div>
                    <div className={style.imagesContainer}>
                        <div className='serviceCard1'
                        // style={{
                        //     paddingLeft:"-700px"
                        // }}
                        >
                            <div
                                onMouseEnter={() => setWhichCard('film')}
                                onMouseLeave={() => setWhichCard('')}
                                style={{
                                    filter: whichCard !== '' && whichCard !== 'film' ? "blur(3px)" : "blur(0px)",
                                }}
                                className={`${style.imgCont} `}> <img className={style.imgItem} src='/images/services/img1.png' />
                                <h2 className={style.imgText}>film</h2>
                                <p className={style.imglowerText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                <img className={style.playIcon}
                                    onClick={() => setVideo('/videos/dummyVideo.mp4')}
                                    src='/icons/playIcon.png' />
                            </div>
                        </div>
                        <div
                        >
                            <div
                                onMouseEnter={() => setWhichCard('design')}
                                onMouseLeave={() => setWhichCard('')}
                                style={{
                                    filter: whichCard !== '' && whichCard !== 'design' ? "blur(3px)" : "blur(0px)",
                                }}
                                className={`${style.imgCont} serviceCard2`}> <img className={style.imgItem} src='/images/services/img2.png' />
                                <h2 className={`${style.imgText} serviceDesignText`}>Design</h2>
                                <p className={style.imglowerText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <img
                                    onClick={() => setVideo('/videos/dummyVideo.mp4')}
                                    className={style.playIcon} src='/icons/playIcon.png' />
                            </div>
                        </div>
                        <div
                        >
                            <div
                                onMouseEnter={() => setWhichCard('tech')}
                                onMouseLeave={() => setWhichCard('')}
                                style={{
                                    filter: whichCard !== '' && whichCard !== 'tech' ? "blur(3px)" : "blur(0px)",
                                }}
                                className={`${style.imgCont} serviceCard3`}> <img className={style.imgItem} src='/images/services/img3.png' />
                                <h2 className={style.imgText}>Tech</h2>
                                <p className={style.imglowerText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                <img
                                    onClick={() => setVideo('/videos/dummyVideo.mp4')}
                                    className={style.playIcon} src='/icons/playIcon.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service1