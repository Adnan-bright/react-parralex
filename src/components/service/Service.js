import React, { useState, useRef, useEffect } from 'react'
import * as style from '../../styles/components/service.module.css'
import ReactPlayer from 'react-player'
import VideoCloseIcon from '../../../static/icons/videoClose.webp'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import UseService from './useService';
function Service({ isMobile }) {
    const {designData, filmData, techData} = UseService()


    const myRef=useRef()
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".serviceMainSection",
                scrub: 5,
                markers: false,
            }
        });
        tl.to(".serviceBoxesBg", { filter: "blur(10px)", xPercent: 30, opacity: 0.5, scale: 0.6, duration: 18, ease: "none", })
        tl.to(".serviceBoxesBg", { filter: "blur(0px)", xPercent: 0, opacity: 1, scale: 1, duration: 24, ease: "none", })

    }, [])
    const [loading, setLoading] = useState(true)
    const [whichCard, setWhichCard] = useState('')
    const [video, setVideo] = useState('')
    const ref = useRef(null)

    const items = [
        {
            title: "Film",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            videoUrl: "/videos/dummyVideo.mp4",
            coverImg: "/images/services/img1.webp"
        },
        {
            title: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            videoUrl: "/videos/dummyVideo.mp4",
            coverImg: "/images/services/img2.webp"
        },
        {
            title: "Tech",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            videoUrl: "/videos/dummyVideo.mp4",
            coverImg: "/images/services/img3.webp"
        }
    ]
    return (
        <div>
            {
                isMobile ?
                    <div
                        className={`${style.mblMain}  `}
                    >
                        <div
                            style={{
                                display: video ? 'flex' : "none",
                            }}
                            className={style.mblVideoBody}>
                            <div className={style.mblVideoContainer}

                            >
                                <div
                                    className={style.mblVideoBox}
                                >
                                    {!loading && <img
                                        onClick={() => { setLoading(true); setVideo('') }}

                                        className={style.mblVideoCloseIcon}
                                        src={VideoCloseIcon} alt='VideoCloseIcon' />}
                                    <ReactPlayer
                                        onStart={() => setLoading(false)}
                                        ref={ref}
                                        playing={true}
                                        loop={false}
                                        height='100%'
                                        width={'100%'}
                                        className={style.mblVideo}
                                        url={video}
                                        title={video}
                                        controls={false}
                                    />
                                </div>
                                {loading && <center>
                                    <div
                                        className={style.loading}
                                    ><div className={style.dotTyping}></div></div>
                                </center>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className={`${style.mblBgBoxes} `}>
                                    <img
                                        className={style.mblBgBoxes}
                                        src='/images/services/mblBoxes.webp' />
                                </div>
                                <div
                                >
                                    <h1 className={style.mblHeading}>services</h1>
                                </div>
                                <div className={style.mblImagesContainer}>
                                    {
                                        items.map((item, index) => {
                                            return <center key={index}>
                                                <div
                                                    className={`${style.mblImgCont}`}>
                                                    <img className={style.mblImgItem}
                                                        src={item.coverImg} />
                                                    <div className={style.mblTextContainer}>
                                                        <h2 className={style.mblImgText}>{item.title}</h2>
                                                        <p className={style.mblImglowerText}>
                                                            {item.description} </p>
                                                    </div>
                                                    <img className={style.mblPlayIcon}
                                                        onClick={() => setVideo(item.videoUrl)}
                                                        src='/icons/playIcon.png' />
                                                </div>
                                            </center>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div
                        className={`${style.main}  serviceMainSection`}
                    >
                        <div
                            style={{
                                display: video ? 'flex' : "none",
                            }}
                            className={!video ? style.videoBodyHide : style.videoBody}>
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
                                        controls={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div
                                    className={video ? style.contentInVisible : style.contentVisible}
                                >
                                    <div
                                    >
                                        <h1 className={`${style.heading} servicesTitle`}>services</h1>
                                    </div>
                                    <div className={style.imagesContainer}>
                                        <div className='serviceCard1'

                                        >
                                            <div
                                                onMouseEnter={() => setWhichCard('film')}
                                                onMouseLeave={() => setWhichCard('')}
                                                style={{
                                                    filter: whichCard !== '' && whichCard !== 'film' ? "blur(3px)" : "blur(0px)",
                                                }}
                                                className={`${whichCard === 'film' ? style.newStyle : whichCard === 'design' || whichCard === 'tech' ? style.newStyle1 : style.newStyle2} ${style.imgCont}`}> <img className={style.imgItem} src='/images/services/img1.webp' />
                                                <h2 className={style.imgText}>film</h2>
                                                <p className={style.imglowerText}>
                                                   {filmData.description} </p>
                                                <img className={style.playIcon}
                                                    onClick={() => setVideo(filmData.video)}
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
                                                className={`${whichCard === 'design' ? style.newStyle : whichCard === 'film' || whichCard === 'tech' ? style.newStyle1 : style.newStyle2} ${style.imgCont} serviceCard2`}> <img className={style.imgItem} src='/images/services/img2.webp' />
                                                <h2 className={`${style.imgText} serviceDesignText`}>Design</h2>
                                                <p className={style.imglowerText}>
                                                   {designData.description}</p>
                                                <img
                                                    onClick={() => setVideo(designData.video)}
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
                                                className={`${whichCard === 'tech' ? style.newStyle : whichCard === 'film' || whichCard === 'design' ? style.newStyle1 : style.newStyle2} ${style.imgCont} serviceCard3`}> <img className={style.imgItem} src='/images/services/img3.webp' />
                                                <h2 className={style.imgText}>Tech</h2>
                                                <p className={style.imglowerText}>
                                                    {techData.description} </p>
                                                <img
                                                    onClick={() => setVideo(techData.video)}
                                                    className={style.playIcon} src='/icons/playIcon.png' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </div>
    )
}

export default Service