import React from 'react'
import * as style from '../../styles/components/contact1.module.css'
import ReviewContainer from '../reviewContainer/ReviewContainer'

function Contact1({ id, isMobile }) {
    return (
        <div>
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