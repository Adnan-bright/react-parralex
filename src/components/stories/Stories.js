import React, { useState, useEffect, useRef } from 'react'
import * as style from '../../styles/components/stories.module.css'
import Slider from "react-slick";
import { motion } from "framer-motion";
import UseStoriesMouseGesture from './useStoriesMouseGesture';
import UseStories from './useStories';

function Stories({ isMobile }) {
    const {storiesData}=UseStories()
    const data = [
        {
            className: 'greenCross',
            xValue: 80,
            yValue: 20,
            speedValue: 10
        },
        {
            className: 'goldenCross',
            xValue: 90,
            yValue: 130,
            speedValue: 5
        },
        {
            className: 'purpleCross',
            xValue: -100,
            yValue: 0,
            speedValue: 12
        },
        {
            className: 'redCross',
            xValue: 90,
            yValue: 120,
            speedValue: 10
        },
        {
            className: 'largeBox',
            xValue: 110,
            yValue: 20,
            speedValue: 12
        },
        {
            className: 'leftBox',
            xValue: 110,
            yValue: 20,
            speedValue: 8
        },
        {
            className: 'rightBox',
            xValue: 140,
            yValue: 20,
            speedValue: 6
        },
    ]
    const myRef = useRef()
    const pageRef = useRef()
    const { bind } = UseStoriesMouseGesture(data, pageRef)

    const [activeIndex, setActiveIndex] = useState(0)
    const [check, setcCheck] = useState(false)
    const [whichCard, setWhichCard] = useState('')

    // const storiesData = [

    //     {
    //         img: '/images/stories/2.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod. Lorem ipsum ',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: '/images/stories/2.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: '/images/stories/4.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: '/images/stories/5.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: '/images/stories/6.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: '/images/stories/7.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: '/images/stories/8.webp',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/13/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/1/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/2/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/3/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/4/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/5/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/6/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/7/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },
    //     {
    //         img: 'https://picsum.photos/id/8/200/300',
    //         title: 'Henry Miner Artist Spotlight',
    //         description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
    //         icon: '/images/stories/icon.webp'
    //     },

    // ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        arrows: false,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },
            
          ]
    };


    const classes = [
        {
            class: 'first'
        },
    ]
    storiesData.push(storiesData[0])
    return (
        <div {...bind()} ref={pageRef}>
    
            {
                isMobile ?
                    <div className={style.mblMain}>
                        <h1 className={style.mblHeading}>
                            our best stories
                        </h1>

                        <div
                            onClick={() => check && setWhichCard('')}
                            className={style.mblImagesContainer}
                        >
                            {
                                storiesData?.map((item, index) => {
                                    return <div
                                        style={{
                                            alignSelf: whichCard === index ? "center" :
                                                index % 2 === 0 ? "flex-end" : "",
                                            transition: "ease-in-out .5s"
                                        }}
                                        key={index}
                                        onMouseEnter={() => setcCheck(false)}
                                        onMouseLeave={() => setcCheck(true)}
                                        onClick={() => setWhichCard(index)}
                                        className={index === whichCard ?
                                            style.mblSingleImgContainerActive :
                                            style.mblSingleImgContainer
                                        }>
                                        <img
                                            style={{
                                                opacity: whichCard === index ? 1 : 0
                                            }}
                                            className={style.mblIcon}
                                            src={'/images/stories/icon.webp'} />
                                        <div
                                            style={{
                                                transform: whichCard === index ?
                                                    'translateY(0px) rotateZ(-45deg)' :
                                                    'translateY(-20px) rotateZ(-45deg)',
                                                opacity: whichCard === index ?
                                                    1 :
                                                    0,
                                            }}
                                            className={style.mblTxtContainer}>
                                            <h5 className={style.mblTitle}>
                                                {item.title}
                                            </h5>
                                            <p className={style.mblDescription}>
                                                {item.description}
                                            </p>
                                        </div>
                                        <img draggable={false}
                                            className={style.mblImgTop} src={item.coverImage} />
                                    </div>
                                })
                            }

                        </div>
                        <center >
                            <p
                                className={style.mblBtnText}
                            >see all work</p>
                        </center>
                    </div>
                    :
                    <div className={`${style.main} storiesMainPanel`}>

                        <div className={style.crossesContainer}>
                            <div className='meinContainerAnimated'>
                                <div className='greenCross cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.bgImgBtmGr} ${item.class}`}>
                                                <img src='/images/stories/greenCross.webp'
                                                    alt='green-cross'
                                                />
                                            </motion.div>
                                        })
                                    }
                                </div>
                                <div className='goldenCross cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.bgImgBtmGlr} ${item.class}`}>

                                                <img src='/images/stories/goldenCross.webp'
                                                    alt='golden-cross'
                                                />
                                            </motion.div>
                                        })
                                    }
                                </div>
                                <div className='purpleCross cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.bgImgBtmPlr} ${item.class}`}>
                                                <img src='/images/stories/purpleCross.webp'
                                                    alt='purple-cross'
                                                />
                                            </motion.div>
                                        })
                                    }
                                </div>
                                <div className='redCross cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                className={`${style.bgImgBtmRed} ${item.class}`}
                                            >
                                                <img src='/images/stories/redCross.webp'
                                                    alt='red-cross'
                                                />
                                            </motion.div>
                                        })
                                    }
                                </div>


                            </div>

                        </div>
                        <div className={style.boxesContainer}>
                            <div className=' meinContainerAnimated'>
                                <div className='cube largeBox'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index} className={`${style.bgImgLarge} ${item.class}`}>
                                                <img src='/images/stories/largeBox.webp'
                                                    alt='large-box'
                                                />
                                            </motion.div>
                                        })
                                    }
                                </div>
                                <div className={style.bgImgLeftContainer}>
                                    <div className='leftBox cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index} className={`${style.bgImgLeft} ${item.class}`}>
                                                    <img src='/images/stories/leftBox.webp' alt='leftBox' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={style.rightBoxContainer}>
                                    <div className='cube rightBox'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    className={`${style.bgImgRight} ${item.class}`}>
                                                    <img src='/images/stories/rightBox.webp' alt='rightBox' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
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
                                <Slider
                                    ref={myRef}
                                    {...settings}
                                    className={`${style.slider} sliderComponent`}
                                >
                                    {
                                        storiesData?.map((item, index) => {
                                            return <div>
                                                {index % 2 === 0 ? <div
                                                    style={{
                                                        opacity: index + 1 === storiesData.length && 0
                                                    }}
                                                    onMouseEnter={() => setWhichCard('active')}
                                                    onMouseLeave={() => setWhichCard('')}
                                                    key={index} className={whichCard === "active" ? style.singleImgContainerBlur : style.singleImgContainer}>
                                                    <img
                                                        className={style.icon}
                                                        src={'/images/stories/icon.webp'} />
                                                    <div className={style.txtContainer}>
                                                        <h5 className={style.title}>
                                                            {item.title}
                                                        </h5>
                                                        <p className={style.description}>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <img draggable={false} className={style.imgTop} src={item.coverImage} />
                                                </div> :
                                                    <div
                                                        style={{
                                                            opacity: index + 1 === storiesData.length && 0
                                                        }}
                                                        className={style.btmRowInSlider}
                                                    >
                                                        <div
                                                            onMouseEnter={() => setWhichCard('active')}
                                                            onMouseLeave={() => setWhichCard('')}
                                                            key={index} className={whichCard === "active" ? style.singleImgContainerBlur : style.singleImgContainer}>
                                                            <img
                                                                className={style.icon}
                                                                src={'/images/stories/icon.webp'} />
                                                            <div className={style.txtContainer}>
                                                                <h5 className={style.title}>
                                                                    {item.title}
                                                                </h5>
                                                                <p className={style.description}>
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                            <img draggable={false} className={style.imgTop} src={item.coverImage} />
                                                        </div>
                                                    </div>}
                                            </div>
                                        })
                                    }
                                </Slider>
                            </div>
                            {/* <center>
                                <div className={style.customDotsContainer}>
                                    <CustomDots onDotClick={onDotsClick} dots={storiesData} activeIndex={activeIndex} />
                                </div>
                            </center> */}
                        </div>

                    </div>
            }
        </div >
    )
}

export default Stories