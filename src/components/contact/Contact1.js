import React, { useRef } from 'react'
import * as style from '../../styles/components/contact1.module.css'
import ReviewContainer from '../reviewContainer/ReviewContainer'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import MouseTracker from '../hooks/MouseTracker';

function Contact1({ id, isMobile }) {
    const [ref, isVisible] = useInView({ threshold: 0.7 });
    const myRef = useRef()
    const myRef2 = useRef()
    const myRef3 = useRef()
    const myRef4 = useRef()
    const myRef5 = useRef()
    const myRef6 = useRef()
    const myRef7 = useRef()
    // MouseTracker('cube', myRef, 380, 170, 20)
    // MouseTracker('cube', myRef2, 200, 40, 20)
    // MouseTracker('cube', myRef3, 200, 40, 20)
    // MouseTracker('cube', myRef4, 200, 40, 20)
    // MouseTracker('cube', myRef5, 350, 40, 15)
    // MouseTracker('cube', myRef6, 280, -470, 40)
    // MouseTracker('cube', myRef7, 480, -470, 40)

    const variants = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: 100,
        },
    };
    const variants2 = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: -100,
        },
    };
    const variants3 = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: -100,
        },
    };
    const classes = [
        {
            class: 'first'
        }
    ]
    return (
        <div >
            {
                isMobile ?
                    <div className={style.mblMain}>
                        <div className={style.mblBody}>
                            <img
                                className={style.leftBgImage}
                                src='/images/contact/mblRightBg.png' />
                            <img
                                className={style.rightBgImage}
                                src='/images/contact/mblLeftBg.png' />
                            <div className={style.textContainer}>
                                <h3 className={style.mblMainHeading}>
                                    CONTACT US
                                </h3>
                            </div>
                            <center>
                                <p className={style.mblMainDesc}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </center>
                            <div className={style.mblFormContainer}>
                                <div className={style.mblTopRow}>
                                    <input type={'text'} placeholder='First name' />
                                    <input type={'text'} placeholder='Last name' />
                                    <input type={'text'} placeholder='Email' />
                                    <input type={'text'} placeholder='Phone' />
                                    <input className={style.mblMessageTxt} type={'text'} placeholder='Message' />
                                </div>

                                <center >
                                    <div className={style.mblBtn}>submit</div></center>
                            </div>
                            <div
                                className={style.singleBoxContainer}
                            >
                                <center>
                                    <img
                                        className={style.mblSingleBox}
                                        src='/images/contact/mblSingleBox.webp' />
                                </center>
                                <div className={style.mblRatingCont}>
                                    <p className={style.mblRating}>
                                        5.0
                                    </p>
                                    <img className={style.mblStar}
                                        src='/images/contact/star.webp' />
                                </div>
                                <p className={style.mblDescriptionMain}>
                                    “There are a lot of benefits to working with MAG-RAW, and
                                    that’s why I’ll continue to go back to them.”
                                </p>
                                <p className={style.mblShortDesc}>
                                    Solutions Advisor, IT Business & Solutions Firm
                                </p>
                            </div>
                            <img className={style.btmLeftBgImg}
                                src='/images/contact/btmLeftBg.webp' />
                            <img className={style.btmRightBgImg}
                                src='/images/contact/btnRightBg.webp' />
                            <div className={style.mblFolloeContainer}>
                                <p className={style.mblFollow}>
                                    follow us
                                </p>
                                <div className={style.mblIconsContainer}>
                                    <img className={style.mblSocialIcon}
                                        src='/images/contact/insta.webp'
                                    />
                                    <img className={style.mblSocialIcon}
                                        src='/images/contact/facebook.webp'
                                    />
                                    <img className={style.mblSocialIcon}
                                        src='/images/contact/twitter.webp'
                                    />
                                    <img className={style.mblSocialIcon}
                                        src='/images/contact/linkedin.webp'
                                    />
                                    <img className={style.mblSocialIcon}
                                        src='/images/contact/youtube.webp'
                                    />
                                    <img className={style.mblSocialIcon}
                                        src='/images/contact/vimeo.webp'
                                    />
                                </div>
                                <p className={style.copyRight}>
                                    © 2022 MAG-RAW Creations, LLC all rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`${style.body} `}>

                        <div >
                            <div ref={myRef} className='meinContainerAnimated'>
                                <div id='cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                // ref={ref}
                                                // variants={variants2}
                                                // animate={isVisible ? "visible" : "hidden"}
                                                // transition={{ duration: 3, ease: "easeOut" }}
                                                className={`${style.leftMidBg} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftMid.png' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div ref={myRef2} className='meinContainerAnimated'>
                                <div id='cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                // ref={ref}
                                                // variants={variants2}
                                                // animate={isVisible ? "visible" : "hidden"}
                                                // transition={{ duration: 3, ease: "easeOut" }}
                                                className={`${style.leftBtmBg} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftBtm.png' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div ref={myRef4} className='meinContainerAnimated'>
                                <div id='cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                // ref={ref}
                                                // variants={variants2}
                                                // animate={isVisible ? "visible" : "hidden"}
                                                // transition={{ duration: 3, ease: "easeOut" }}
                                                className={`${style.bgContainerLeftLarge} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftLarge.png' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div ref={myRef3} className='meinContainerAnimated'>
                                <div id='cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                // ref={ref}
                                                // variants={variants2}
                                                // animate={isVisible ? "visible" : "hidden"}
                                                // transition={{ duration: 3, ease: "easeOut" }}
                                                className={`${style.bgContainerLeftSmall} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftSmall.png' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className={style.rightBoxContainer}>
                                <div ref={myRef5} className='meinContainerAnimated'>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants2}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 3, ease: "easeOut" }}
                                                    className={`${style.bgContainerRightBox} ${item.class}`}
                                                >
                                                    <img
                                                        className={`${style.bgImage} `}
                                                        src='/images/contact/rightBox.png' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.right2ndBtmContainer}>
                                <div ref={myRef6} className='meinContainerAnimated'>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants2}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 3, ease: "easeOut" }}
                                                    className={`${style.right2ndBtmBg} ${item.class}`}
                                                >
                                                    <img
                                                        className={`${style.bgImage} `}
                                                        src='/images/contact/right2ndBtm.png' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.right2ndBtmContainer}>
                                <div ref={myRef7} className='meinContainerAnimated'>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants2}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 3, ease: "easeOut" }}
                                                    className={`${style.rightBtmBg} ${item.class}`}
                                                >
                                                    <img
                                                        className={`${style.bgImage} `}
                                                        src='/images/contact/rightBtm.png' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div id={id} className={style.main}>
                            <div className={style.reviewContainer}>
                                <ReviewContainer />
                            </div>
                            <div className={style.midContainer}>

                                <h1 className={style.heading}>CONTACT US</h1>
                                <div className={style.formContainer}>
                                    <div className={style.topRow}>
                                        <input type={'text'} placeholder='First name' />
                                        <input type={'text'} placeholder='Last name' />
                                    </div>
                                    <div className={style.midRow}>
                                        <input type={'text'} placeholder='Email' />
                                        <input type={'text'} placeholder='Phone' />
                                    </div>
                                    <div className={style.lowerRow}>
                                        <input type={'text'} placeholder='Message' />
                                    </div>
                                    <div className={style.btnContainer}> <div className={style.btn}>submit</div></div>
                                </div>
                            </div>

                        </div>
                        <div className={style.copyrightContainer}>
                            <p className={style.copyRight}>© 2022 MAG-RAW Creations, LLC all rights reserved</p>
                        </div>
                        <div className={style.followContainer}>
                            <p className={style.follow}>FOLLOW</p><br />
                            <div className={style.tabs}>
                                <a className={style.tab1}>
                                </a>
                                <a className={style.tab2}>
                                </a>
                                <a className={style.tab3}>
                                </a>
                                <a className={style.tab4}>
                                </a>
                                <a className={style.tab5}>
                                </a>
                                <a className={style.tab6}>
                                </a>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Contact1