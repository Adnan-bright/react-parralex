import React, { useState, useRef } from 'react'
import * as style from '../../styles/components/heroVer1.module.css'
import PlayIcon from '../../../static/icons/playIcon.png'
import Video from '../../../static/videos/dummyVideo.mp4'
import RightArrow from '../../../static/icons/rightArrow.png'
import VideoCloseIcon from '../../../static/icons/videoClose.png'
import ReactPlayer from 'react-player'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

function HeroVer1() {
    const ref = useRef(null)
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
                            playing={true}
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
            <ParallaxBanner
                layers={[{
                    image: '/images/home/union.png',
                    translateX: [0, 0],
                    easing: 'easeInOut',
                    style: {
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat", backgroundPositionX: "center"
                    }
                }]}

                className={style.main}

            >
                <div
                    className={style.content}>
                    <Parallax
                        translateX={[0, 10]}
                        easing={'easeInOut'}
                        className={style.headings}
                    >
                        <Parallax translateX={[0, 0]}
                            easing={'easeInOut'}
                            className={style.mainHeading1}  >Creative support</Parallax>
                        <Parallax translateX={[0, 0]}
                            className={style.mainHeading2} >
                            for your business</Parallax>

                        <Parallax
                            className={style.mainHeading3}>at an affordable cost.</Parallax>
                    </Parallax>
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
            </ParallaxBanner>
        </div>
    )
}

export default HeroVer1