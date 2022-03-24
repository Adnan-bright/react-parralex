import React, { useState, useRef } from 'react'
import * as style from '../../styles/components/heroVer1.module.css'
import PlayIcon from '../../../static/icons/playIcon.webp'
import Video from '../../../static/videos/dummyVideo.mp4'
import RightArrow from '../../../static/icons/rightArrow.webp'
import VideoCloseIcon from '../../../static/icons/videoClose.webp'
import ReactPlayer from 'react-player'

function HeroVer1({ isMobile }) {
    const ref = useRef(null)

    const [video, setVideo] = useState(false)
    return (
        <div>
            {
                isMobile ?
                    <div
                        className={style.mblTop}
                    >
                        <div
                            style={{
                                display: video ? 'flex' : "none",
                            }}
                            className={style.mblVideoBody}>
                            <div className={style.mblVideoContainer}>
                                <div
                                onContextMenu={e => e.preventDefault()}
                                    className={style.mblVideoBox}
                                >
                                    <img onClick={() => setVideo(false)}
                                        className={style.mblVideoCloseIcon}
                                        src={VideoCloseIcon} alt='VideoCloseIcon' />
                                    <ReactPlayer
                                        ref={ref}
                                        playing={video}
                                        loop={false}
                                        height='100%'
                                        width={'100%'}
                                        className={style.mblVideo}
                                        url={Video}
                                        title={Video}
                                        controls={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={style.mblBody}
                        >
                            <div
                                className={style.mblHeadingsContainer}
                            >
                                <p className={style.mblTopHeading}>
                                    Creative support
                                </p>
                                <p className={style.mblMidHeading}>
                                    for your business
                                </p>
                                <p className={style.mblBtmHeading}>
                                    at an affordable cost.
                                </p>
                            </div>
                            <img
                                onClick={() => setVideo(true)}
                                className={style.mblPlayIcon}
                                src='/images/home/playIcon.webp' />

                            <div
                                className={style.mblScrollTxtCont}
                            >
                                <p className={style.mblScrollText}>
                                    Scroll
                                </p>
                                <center><img
                                    className={style.mblDownArrow}
                                    src='/images/home/downArrow.png' /></center>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div
                            style={{
                                display: video ? 'flex' : "none",
                            }}
                            className={style.videoBody}>
                            <div className={style.videoContainer}>
                                <div
                                onContextMenu={e => e.preventDefault()}
                                    className={style.videoBox}
                                >
                                    <img onClick={() => setVideo(false)}
                                        className={style.videoCloseIcon} src={VideoCloseIcon} alt='VideoCloseIcon' />
                                    <ReactPlayer
                                        ref={ref}
                                        playing={video}
                                        loop={false}
                                        config={{ file: { 
                                            attributes: {
                                              controlsList: 'nodownload'  //<- this is the important bit
                                            }
                                        }}}
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
                                <img className={`${style.bgImage} bgImageHero1`} src='/images/home/union.webp' />
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
            }
        </div>
    )
}

export default HeroVer1