import React, { useState, useRef } from 'react'
import * as style from '../../styles/components/service1.module.css'
import ReactPlayer from 'react-player'
import Video from '../../../static/videos/dummyVideo.mp4'
import VideoCloseIcon from '../../../static/icons/videoClose.png'

function Service1() {
    const [whichCard, setWhichCard] = useState('')
    const [video, setVideo] = useState('')
    const ref = useRef(null)
    return (
        <div
            className={style.main}
        >
            {
                video !== '' ?
                    <div className={style.videoContainer}>
                        <div

                            className={style.videoBox}
                        >
                            <img onClick={() => setVideo('')}
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
                    :
                    <div>
                        <div>
                            <div className={style.bgBoxes}>
                                <img src='/images/about-us/boxes.png' />
                            </div>
                            <div
                            >
                                <h1 className={style.heading}>services</h1>
                            </div>
                            <div className={style.imagesContainer}>
                                <div
                                    onMouseEnter={() => setWhichCard('film')}
                                    onMouseLeave={() => setWhichCard('')}
                                    style={{
                                        filter: whichCard !== '' && whichCard !== 'film' ? "blur(3px)" : "blur(0px)",
                                    }}
                                    className={style.imgCont}> <img className={style.imgItem} src='/images/services/img1.png' />
                                    <h2 className={style.imgText}>film</h2>
                                    <p className={style.imglowerText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                    <img className={style.playIcon}
                                        onClick={() => setVideo('/videos/dummyVideo.mp4')}
                                        src='/icons/playIcon.png' />
                                </div>
                                <div
                                >
                                    <div
                                        onMouseEnter={() => setWhichCard('design')}
                                        onMouseLeave={() => setWhichCard('')}
                                        style={{
                                            filter: whichCard !== '' && whichCard !== 'design' ? "blur(3px)" : "blur(0px)",
                                        }}
                                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img2.png' />
                                        <h2 className={style.imgText}>Design</h2>
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
                                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img3.png' />
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

            }
        </div>
    )
}

export default Service1