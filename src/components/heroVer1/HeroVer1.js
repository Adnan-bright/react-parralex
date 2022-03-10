import React, { useState, useRef, useEffect, useMemo } from 'react'
import * as style from '../../styles/components/heroVer1.module.css'
import PlayIcon from '../../../static/icons/playIcon.png'
import Video from '../../../static/videos/dummyVideo.mp4'
import RightArrow from '../../../static/icons/rightArrow.png'
import VideoCloseIcon from '../../../static/icons/videoClose.png'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'

function HeroVer1({ newClick, count }) {
    const [video, setVideo] = useState(false)
    const ref = useRef(null)
    const [index, setIndex] = useState(0)
    useEffect(() => {
            setIndex(count)
    }, [count])

    return (
        <div>
            {video ?
                <div className={style.videoContainer}>
                    <motion.div

                        animate={{
                            scale: [0.5, 1],
                            opacity: [0, 3, 1],
                        }}
                        transition={{ duration: 0.3, easings: "easeInOut" }}

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
                    </motion.div>
                </div>
                :
                <motion.div key={index}
                    animate={{
                        backgroundPositionX: ['0vw', '15vw']
                    }}
                    transition={{ duration: 0.7, easings: "easeInOut" }}
                    className={style.main}>
                    <motion.div  key={index}
                        animate={{
                            marginRight: ['-100px', '100px']
                        }}
                        transition={{ duration: 0.7, easings: "easeInOut" }}
                        className={style.content}>
                        <motion.div

                            className={style.mainHeading1}  >Creative support</motion.div>
                        <div className={style.mainHeading2} >
                            for your business</div>

                        <div className={style.mainHeading3}>at an affordable cost.</div>
                        <div className={style.playIconContainer}>
                            <img

                                className={style.playIcon} onClick={() => setVideo(true)} src={PlayIcon} alt='PlayIcon' />
                        </div>
                        <div
                            className={style.bottomTextContainer}>
                            <p className={style.bottomText} onClick={() => newClick(1)}>Scroll</p>
                            <img className={style.rightArrow} onClick={() => newClick(1)} src={RightArrow} alt='PlayIcon' />
                        </div>

                    </motion.div>
                </motion.div>
            }
        </div>
    )
}

export default HeroVer1