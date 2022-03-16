import React, { useState, useRef, useEffect } from 'react'
import * as style from '../../styles/components/service1.module.css'
import ReactPlayer from 'react-player'
import VideoCloseIcon from '../../../static/icons/videoClose.png'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Service1() {
    gsap.registerPlugin(ScrollTrigger);
    const [whichCard, setWhichCard] = useState('')
    const [video, setVideo] = useState('')
    const ref = useRef(null)

    useEffect(() => {
         // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".storiesMain ",
        //         scrub: 5,
        //         markers: false
        //     }
        // });



        // tl.to(".serviceBoxesBg", { xPercent: 200, filter: "blur(8px)", duration: 9, ease: "power2.out" })
        // tl.to(".serviceBoxesBg", { xPercent: 0, filter: "blur(0px)", duration: 7, ease: "power2.out" })



        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".serviceImagesContainer",
        //         scrub: 2,
        //         markers: false
        //     }
        // });
        // tl.to(".serviceCard1", { xPercent: 0, duration: 8, ease: "power2.out" })
        // tl.to(".serviceCard1", { xPercent: -15, duration: 6, ease: "power2.out" })

        // gsap.to("[data-speed]", {
        //     x: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger:".serviceMain .storiesMain",
        //       start: 0,
        //       end: "max",
        //       invalidateOnRefresh: true,
        //       scrub: 0,
        //     //   horizontal:true
        //     }
        //   });

    }, [])
    return (
        <div
            className={`${style.main} serviceMain`}
        >
            <div
                style={{
                    display: video ? 'flex' : "none",
                }}
                className={style.videoBody}>
                <div className={style.videoContainer}>
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
                    <div className={`${style.bgBoxes} S`}>
                        <img src='/images/about-us/boxes.png' />
                    </div>
                    <div
                    >
                        <h1 className={style.heading}>services</h1>
                    </div>
                    <div className={`${style.imagesContainer} serviceImagesContainer`}>
                        <div
                         data-speed="0.25"
                            onMouseEnter={() => setWhichCard('film')}
                            onMouseLeave={() => setWhichCard('')}
                            style={{
                                filter: whichCard !== '' && whichCard !== 'film' ? "blur(3px)" : "blur(0px)",
                                // marginLeft:"-750px"
                            }}
                            className={`${style.imgCont} serviceCard1`}>
                            <img className={style.imgItem} src='/images/services/img1.png' />
                            <h2 className={style.imgText}>film</h2>
                            <p className={style.imglowerText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                            <img className={style.playIcon}
                                onClick={() => setVideo('/videos/dummyVideo.mp4')}
                                src='/icons/playIcon.png' />
                        </div>
                        <div
                        >
                            <div data-speed="0.50"
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