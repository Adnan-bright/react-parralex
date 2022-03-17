import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/stories1.module.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Stories1() {
    const [whichCard, setWhichCard] = useState('')
    gsap.registerPlugin(ScrollTrigger);

    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".storiesBtmRow .processMainContainer",
    //             scrub: 2,
    //             markers: false
    //         }
    //     });
    //     tl.to(".storiesBtmRow", {xPercent:-25, duration: 8,ease: "power2.out"})
    //     tl.to(".storiesBtmRow", {xPercent:0, duration: 6,ease: "power2.out"})
    //     tl.to(".storiesBtmRow", {xPercent:-15, duration: 6,ease: "power2.out"})


    // }, [])
    return (
        <div className={`${style.main} storiesMain`}>
            <img src='/images/stories/croses.png' className={style.bgImgBtm} />
            <div className={style.bgImg}>
                <img src='/images/stories/bg.png' />
            </div>
            <div className={style.upperContainer}>
                <h1 className={style.heading}>
                    our best stories
                </h1>
                <div className={style.btn}>
                    see all work
                </div>
            </div>
            <div className={style.imagesContainer}>

                <div className={style.topContainer}>
                    <div
                        onMouseEnter={() => setWhichCard('top1')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'top1' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'top1' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'top1' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top1' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top1' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>
                        <img className={style.imgTop} src='/images/stories/2.png' />
                    </div>
                    <div
                        onMouseEnter={() => setWhichCard('top2')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'top2' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'top2' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'top2' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top2' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top2' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>
                        <img className={style.imgTop} src='/images/stories/7.png' />
                    </div>
                    <div
                        onMouseEnter={() => setWhichCard('top3')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'top3' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'top3' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'top3' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top3' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top3' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>

                        <img className={style.imgTop} src='/images/stories/4.png' />
                    </div>
                    <div
                        onMouseEnter={() => setWhichCard('top4')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'top4' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'top4' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'top4' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top4' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'top4' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>

                        <img className={style.imgTop} src='/images/stories/11.png' />
                    </div>
                </div>

                {/* Bottom */}

                <div className={`${style.bottomContainer} storiesBtmRow`}>
                    <div
                        onMouseEnter={() => setWhichCard('bottom1')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'bottom1' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'bottom1' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'bottom1' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom1' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom1' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>
                        <img className={style.imgTop} src='/images/stories/3.png' />
                    </div>
                    <div
                        onMouseEnter={() => setWhichCard('bottom2')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'bottom2' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'bottom2' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'bottom2' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom2' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom2' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>
                        <img className={style.imgTop} src='/images/stories/10.png' />
                    </div>
                    <div
                        onMouseEnter={() => setWhichCard('bottom3')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'bottom3' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'bottom3' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'bottom3' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom3' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom3' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>
                        <img className={style.imgTop} src='/images/stories/12.png' />
                    </div>
                    <div
                        onMouseEnter={() => setWhichCard('bottom4')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'bottom4' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.singleImgContainer}>
                        <center>
                            <img
                                style={{
                                    opacity: whichCard !== '' && whichCard === 'bottom4' ? 1 : 0,
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.icon}
                                src='/images/stories/icon.png' />
                        </center>
                        <div
                            style={{
                                opacity: whichCard !== '' && whichCard === 'bottom4' ? 1 : 0,
                                transition: "ease-in-out .4s",

                            }}
                            className={style.txtContainer}>
                            <center> <h5
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom4' ? 'translateY(0px)' : 'translateY(-20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.title}>
                                Henry Miner Artist Spotlight
                            </h5></center>
                            <center>  <p
                                style={{
                                    transform: whichCard !== '' && whichCard === 'bottom4' ? 'translateY(0px)' : 'translateY(20px)',
                                    transition: "ease-in-out .4s",

                                }}
                                className={style.description}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod.
                            </p></center>
                        </div>
                        <img className={style.imgTop} src='/images/stories/1.png' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Stories1