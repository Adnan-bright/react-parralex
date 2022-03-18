import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/stories1.module.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Slider from "react-slick";

function Stories1() {
    const [whichCard, setWhichCard] = useState('')
    gsap.registerPlugin(ScrollTrigger);
    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
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

    const items = [
        {
            img: '/images/stories/1.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: '/images/stories/2.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: '/images/stories/4.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: '/images/stories/5.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: '/images/stories/6.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: '/images/stories/7.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: '/images/stories/8.png',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        },
        {
            img: 'https://picsum.photos/id/55/200/300',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.png'
        }

    ]
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
                    <Slider {...settings}
                        className={style.slider}
                    >
                        {
                            items?.map((item, index) => {
                                return <div 
                                onMouseEnter={()=> setWhichCard('active')}
                                onMouseLeave={()=> setWhichCard('')}
                                key={index} className={whichCard === "active"? style.singleImgContainerBlur :style.singleImgContainer}>
                                    <img
                                        className={style.icon}
                                        src={item.icon} />
                                    <div className={style.txtContainer}>
                                        <h5 className={style.title}>
                                            {item.title}
                                        </h5>
                                        <p className={style.description}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <img draggable={false} className={style.imgTop} src={item.img} />
                                </div>
                            })
                        }
                    </Slider>
                </div>


                <div className={`${style.bottomContainer} storiesBtmRow`}>
                    <Slider {...settings}
                        className={style.slider}
                    >
                        {
                            items?.map((item, index) => {
                                return <div
                                onMouseEnter={()=> setWhichCard('active')}
                                onMouseLeave={()=> setWhichCard('')}
                                key={index} className={whichCard === "active"? style.singleImgContainerBlur :style.singleImgContainer}>
                                    <img
                                        className={style.icon}
                                        src={item.icon} />
                                    <div className={style.txtContainer}>
                                        <h5 className={style.title}>
                                            {item.title}
                                        </h5>
                                        <p className={style.description}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <img draggable={false} className={style.imgTop} src={item.img} />
                                </div>
                            })
                        }
                    </Slider>
                </div>

            </div>

        </div>
    )
}

export default Stories1