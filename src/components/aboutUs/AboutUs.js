import React from 'react'
import * as style from '../../styles/components/aboutUs.module.css'
function AboutUS({ isMobile }) {


    return (
        <div>
            {
                isMobile ?
                    <div className={`${style.mblMain}  `}>
                        <div className={`${style.mblBgCross}  `}>
                            <img className='pImage' src='/images/about-us/mblCross.webp' />
                        </div>
                        <div
                            className={`${style.mblBody} `}>
                            <div
                            className={style.mblTextContainer}
                            >
                                <p className={style.mblTitle}>About us</p>
                                <p className={style.mblParagraph}>We build creative experiences.<br />
                                    As a Dallas based studio that utilizes multiple<br />
                                    disciplines to pioneer new ideas through film,<br />
                                    design, and creative technology.<br />
                                    Our goal is your success.
                                </p>
                            </div>
                        </div>

                    </div>
                    :
                    <div className={`${style.main} bgImageAbout `}>
                        <div className={`${style.bgCross}  aboutCrossBg`}>
                            <img className='pImage' src='/images/about-us/cross.webp' />
                        </div>
                        <div
                            style={{
                                marginLeft: "-30px"
                            }}
                            className={`${style.body} aboutUsMainContent`}>
                            <p className={style.title}>About us</p>
                            <p className={style.paragraph}>We build creative experiences.<br />
                                As a Dallas based studio that utilizes multiple<br />
                                disciplines to pioneer new ideas through film,<br />
                                design, and creative technology.<br />
                                Our goal is your success.
                            </p>
                        </div>

                    </div>
            }
        </div>
    )
}

export default AboutUS