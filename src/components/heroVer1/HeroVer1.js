import React, { useState, useRef, useEffect } from 'react'
import * as style from '../../styles/components/heroVer1.module.css'
import PlayIcon from '../../../static/icons/playIcon.png'
import Video from '../../../static/videos/dummyVideo.mp4'
import RightArrow from '../../../static/icons/rightArrow.png'
import VideoCloseIcon from '../../../static/icons/videoClose.png'
import ReactPlayer from 'react-player'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

function HeroVer1() {
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".panel",
                scrub: 2,
                markers: false
            }
        });
        tl.to(".bgImageHero1", { filter: "blur(0px)", xPercent:0, duration: 2, ease: "power2.out",})
        tl.to(".bgImageHero1", { filter: "blur(8px)", xPercent:0, duration: 1, ease: "power2.out",})
        tl.to(".bgImageHero1", { filter: "blur(8px)", xPercent:-30, duration: 1, ease: "power2.out",})

    }, [])

    const [video, setVideo] = useState(false)
    return (
        <div>
            <div
                style={{
                    display: video ? 'flex' : "none",
                }}
                className={style.videoBody}>
                <div className={style.videoContainer}>
                    <div

                        className={style.videoBox}
                    >
                        <img onClick={() => setVideo(false)}
                            className={style.videoCloseIcon} src={VideoCloseIcon} alt='VideoCloseIcon' />
                        <ReactPlayer
                            ref={ref}
                            playing={video}
                            loop={false}
                            height='100%'
                            width={'100%'}
                            className={style.video}
                            url={Video}
                            title={Video}
                            controls={false}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${style.main} `}

            >
                <div className={style.bgImgContainer}>
                    <img className={`${style.bgImage} bgImageHero1`} src='/images/home/union.png' />
                </div>
                <div
                    className={`${style.content} hero1MainContent`}>
                    <div
                        className={style.headings}
                    >
                        <div
                            className={`${style.mainHeading1}`}  >Creative support</div>
                        <div
                            className={style.mainHeading2} >
                            for your business</div>

                        <div
                            className={style.mainHeading3}>at an affordable cost.</div>
                    </div>
                    <div style={{
                    }} className={style.playIconContainer}>
                        <img

                            className={style.playIcon} onClick={() => setVideo(true)} src={PlayIcon} alt='PlayIcon' />
                    </div>
                    <div
                        className={style.bottomTextContainer}>
                        <p className={style.bottomText}>Scroll</p>
                        <img className={style.rightArrow} src={RightArrow} alt='PlayIcon' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroVer1