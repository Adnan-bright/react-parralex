import React, { useRef } from 'react'
import * as style from '../../styles/components/contact.module.css'
import ReviewContainer from '../reviewContainer/ReviewContainer'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import UseContactMouseGesture from './useContactMouseGesture';
function Contact({ id, isMobile }) {
    const [ref, isVisible] = useInView({ threshold: 0.7 });
    const myRef = useRef()
    const data = [
        {
            className: 'leftMid',
            xValue:-90,
            yValue: -20,
            speedValue:10
        },
        {
            className: 'leftBtm',
            xValue:90,
            yValue: -20,
            speedValue:4
        },
        {
            className: 'leftLarge',
            xValue:-100,
            yValue: -20,
            speedValue:11
        },
        {
            className: 'leftSmall',
            xValue:90,
            yValue: -10,
            speedValue:5
        },
        {
            className: 'rightBox',
            xValue:40,
            yValue: 20,
            speedValue:8
        },
        {
            className: 'right2ndBtm',
            xValue:-20,
            yValue: -10,
            speedValue:7
        },
        {
            className: 'rightBtm',
            xValue:190,
            yValue: 30,
            speedValue:10
        },
    ]
    const {bind} = UseContactMouseGesture(data, myRef)
    const classes = [
        {
            class: 'first'
        }
    ]
    return (
        <div ref={myRef} {...bind()}>
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
                            <div  className='meinContainerAnimated'>
                                <div className='cube leftMid'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.leftMidBg} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftMid.png' alt='leftMid' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div  className='meinContainerAnimated'>
                                <div className='cube leftBtm' >
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.leftBtmBg} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftBtm.png' alt='leftBtm' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div  className='meinContainerAnimated'>
                                <div className='cube leftLarge'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.bgContainerLeftLarge} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `} alt='leftLarge'
                                                    src='/images/contact/leftLarge.png' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div  className='meinContainerAnimated'>
                                <div className='cube leftSmall'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.bgContainerLeftSmall} ${item.class}`}
                                            >
                                                <img
                                                    className={`${style.bgImage} `}
                                                    src='/images/contact/leftSmall.png' alt='leftSmall' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className={style.rightBoxContainer}>
                                <div  className='meinContainerAnimated'>
                                    <div className='cube rightBox'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    className={`${style.bgContainerRightBox} ${item.class}`}
                                                >
                                                    <img alt='rightBox'
                                                        className={`${style.bgImage} `}
                                                        src='/images/contact/rightBox.png' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.right2ndBtmContainer}>
                                <div  className='meinContainerAnimated'>
                                    <div className='cube right2ndBtm'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    className={`${style.right2ndBtmBg} ${item.class}`}
                                                >
                                                    <img
                                                        className={`${style.bgImage} `} alt='right2ndBtm'
                                                        src='/images/contact/right2ndBtm.png' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.right2ndBtmContainer}>
                                <div className='meinContainerAnimated'>
                                    <div className='cube rightBtm'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    className={`${style.rightBtmBg} ${item.class}`}
                                                >
                                                    <img
                                                        className={`${style.bgImage} `}
                                                        src='/images/contact/rightBtm.png' alt='rightBtm' />
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

export default Contact