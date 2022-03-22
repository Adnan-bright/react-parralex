import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/process.module.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Process() {
    const [hover, setHover] = useState('')
  gsap.registerPlugin(ScrollTrigger);

    return (
        <div className={`${style.main} processMainContainer`}>
            <h1 className={style.heading}>
                OUR PROCESS
            </h1>
            <div

                className={`${style.topRow} processTopRow`}>
                <div

                    className={hover === '' ? `${style.imageContainer5} processContainer1` : hover === 'expansion' ? `${style.imageContainer5Active} ` : `${style.imageContainer5Blur} `}

                >
                    <div
                        onMouseEnter={() => setHover('expansion')}
                        onMouseLeave={() => setHover('')}
                        className={`${style.bgContainer} `}>
                        <div className={`${style.dataContainer} processDataContainer`}>
                            <img

                                className={style.imgItem}
                                src='/images/process/icon5.webp' />
                            <p
                                className={style.imageText}
                            >Expansion</p>
                            <p className={hover === 'expansion' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                // style={{
                //     marginLeft: "170px"
                // }}
                className={`${style.midRow} processMidRow`}>
                <div

                    className={hover === '' ? `${style.imageContainer3} ` : hover === 'planning' ? style.imageContainer3Active : style.imageContainer3Blur}>

                    <div
                        onMouseEnter={() => setHover('planning')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon2.webp' />
                            <p

                                className={style.imageText}>Planning</p>
                            <p className={hover === 'planning' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>

                    </div>

                </div>
                <div

                    className={hover === '' ? style.imageContainer4 : hover === 'deployment' ? style.imageContainer4Active : style.imageContainer4Blur}
                >
                    <div
                        onMouseEnter={() => setHover('deployment')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon4.webp' />
                            <p

                                className={style.imageText}>Deployment</p>
                            <p className={hover === 'deployment' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div
                // style={{
                //     marginLeft: "-1840px"
                // }}
                className={`${style.bottomRow} processBtmRow`}>
                <div

                    className={hover === '' ? style.imageContainer1 : hover === 'ideation' ? style.imageContainer1Active : style.imageContainer1Blur}
                >
                    <div
                        onMouseEnter={() => setHover('ideation')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon1.webp' />
                            <p

                                className={style.imageText}>Ideation</p>
                            <p className={hover === 'ideation' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>

                    </div>

                </div>
                <div

                    className={hover === '' ? style.imageContainer2 : hover === 'creation' ? style.imageContainer2Active : style.imageContainer2Blur}>

                    <div
                        onMouseEnter={() => setHover('creation')}
                        onMouseLeave={() => setHover('')}
                        className={style.bgContainer}>
                        <div className={style.dataContainer}>
                            <img
                                className={style.imgItem}

                                src='/images/process/icon3.webp' />
                            <p

                                className={style.imageText}>Creation</p>
                            <p className={hover === 'creation' ? style.boxDetails : style.boxDetailsHide}>Lorem ipsum dolor sit amet,
                                consectetur adipiing elit, sed do eiusmod.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Process