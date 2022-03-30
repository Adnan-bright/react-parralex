import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/process.module.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Process({ isMobile }) {
    const [hover, setHover] = useState('')
    gsap.registerPlugin(ScrollTrigger);
    const items = [
        {
            title: "Expansion",
            description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
            bgImage: "/images/process/5.webp",
            icon: "/images/process/icon5.webp"
        },
        {
            title: "Planning",
            description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
            bgImage: "/images/process/2.webp",
            icon: "/images/process/icon2.webp"
        },
        {
            title: "Deployment",
            description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
            bgImage: "/images/process/4.webp",
            icon: "/images/process/icon4.webp"
        },
        {
            title: "Ideation",
            description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
            bgImage: "/images/process/1.webp",
            icon: "/images/process/icon1.webp"
        },
        {
            title: "Creation",
            description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
            bgImage: "/images/process/planning.webp",
            icon: "/images/process/icon3.webp"
        },
    ]

    
    return (
        <div>
            {
                isMobile ?
                    <div className={style.mblMain}>
                        <div className={style.body}>
                            <h1 className={style.mblHeading}>
                                OUR PROCESS
                            </h1>
                            {
                                items.map((item, index) => {
                                    return <center key={index}>
                                        <div
                                            className={style.mblMainContainer}
                                            style={{
                                                backgroundImage: `url(${item.bgImage})`,
                                            }}
                                        >
                                            <img className={style.mblIcon} src={item.icon} />
                                            <p
                                                className={style.mblTitle}
                                            >{item.title}</p>
                                            <p
                                                className={style.mblDescription}
                                            >{item.description}</p>
                                        </div>
                                    </center>
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className={`${style.main} `}>
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
            }
        </div>
    )
}

export default Process