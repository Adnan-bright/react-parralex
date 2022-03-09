import React, { useState, useRef } from 'react'
import * as style from '../../styles/components/heroVer1.module.css'
import PlayIcon from '../../../static/icons/playIcon.png'
import Video from '../../../static/videos/dummyVideo.mp4'
import RightArrow from '../../../static/icons/rightArrow.png'
import VideoCloseIcon from '../../../static/icons/videoClose.png'


function HeroVer1({newClick}) {
    const [video, setVideo] = useState(false)

    
    return (
        <div>
            {video ?
                <div className={style.videoContainer}>
                    <img onClick={() => setVideo(false)} className={style.videoCloseIcon} src={VideoCloseIcon} alt='VideoCloseIcon' />
                    <iframe
                        className={style.video}
                        src={Video}
                        title={Video}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                    />
                </div>
                :
                <div className={style.main}>
                    <div
                    className={style.content}>
                            <div
                            className={style.mainHeading1}  >Creative support</div>
                            <div className={style.mainHeading2} >
                                for your business</div>

                            <div className={style.mainHeading3}>at an affordable cost.</div>
                            <div className={style.playIconContainer}>
                                <img
                                
                                className={style.playIcon} onClick={() => setVideo(true)} src={PlayIcon} alt='PlayIcon' />
                            </div>
                        <div
                        className={style.bottomTextContainer}>
                            <p className={style.bottomText} onClick={()=> newClick(1)}>Scroll</p>
                            <img className={style.rightArrow} onClick={()=> newClick(1)} src={RightArrow} alt='PlayIcon' />
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default HeroVer1