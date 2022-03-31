import React, { useState, useEffect, useRef } from 'react'
import * as style from '../../styles/components/stories1.module.css'
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import MouseTracker from '../hooks/MouseTracker';
function Stories1({ isMobile, setIsResume }) {
    const myRef = useRef()

    const [index, setIndex] = useState(0)
    useEffect(() => {
      var lastMouseX = 0,
        lastMouseY = 0;
      var rotX = 250,
        rotY =  -70;
  
      document.addEventListener("mousemove", mouseMoved);
      document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", mouseMoved);
      });
      document.addEventListener("click", function () {
        setIndex(index+1)
      });
      function mouseMoved(ev) {
        var deltaX = ev.pageX ;
        var deltaY = ev.pageY - lastMouseY;
        var direction = ""
        if (ev.pageX < lastMouseX) {
            direction = "left"
        } else if (ev.pageX > lastMouseX) {
            direction = "right"
        }
        rotY -= deltaX * -0.1;
        lastMouseX=ev.pageX 
        if (myRef === null) return 0;

        direction === 'right'  ? myRef.current.slickPrev() : myRef.current.slickNext();
      }
    }, [index]);

    const [ref, isVisible] = useInView({ threshold: 0.7 });
    const [resume, setResume] = useState(false)
    const [check, setcCheck] = useState(false)
    const [whichCard, setWhichCard] = useState('')
    const items = [
        {
            img: '/images/stories/1.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/2.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/4.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/5.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/6.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/7.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/8.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: 'https://picsum.photos/id/13/200/300',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/1.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/2.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/4.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/5.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/6.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/7.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/8.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: 'https://picsum.photos/id/13/200/300',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/1.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/2.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/4.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/5.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/6.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/7.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/8.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: 'https://picsum.photos/id/13/200/300',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/1.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/2.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/4.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/5.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/6.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/7.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: '/images/stories/8.webp',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        },
        {
            img: 'https://picsum.photos/id/13/200/300',
            title: 'Henry Miner Artist Spotlight',
            description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',
            icon: '/images/stories/icon.webp'
        }

    ]
    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, 2100); };
    }
    function enableScrolling() {
        window.onscroll = function () { };
    }
    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        afterChange: (currentSlide) => {
            currentSlide === 0 || currentSlide === items.length - 4 ?
                enableScrolling() : disableScrolling()
        }
    };
    const variants = {
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            x: 100,
            scale: .5,
        },
    };
    const variants2 = {
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            x: -100,
            scale: 1.5,
        },
    };
    const variants3 = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.6,
        },
    };
    const variants4 = {
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            x: 60,
            scale: 1.5,
        },
    };
    const variants5 = {
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            x: -60,
            scale: 1.5,
        },
    };
    const animRef = useRef()
    const animRef2 = useRef()
    const animRef3 = useRef()
    const animRef4 = useRef()
    MouseTracker('cube', animRef, 250, -60, 8)
    MouseTracker('cube', animRef2, 250, -160, 10)
    MouseTracker('cube', animRef3, 250, -160, 10)
    MouseTracker('cube', animRef4, 250, -160, 10)

    useEffect(() => {
        if (isVisible) {
            disableScrolling()
        } else {
            enableScrolling()
        }
        function scroll(e) {
            if (myRef === null) return 0;

            // e.wheelDelta > 0 ? myRef.current.slickPrev() : myRef.current.slickNext();
        }
        const elem = document.querySelector('.storiesMainPanel')
        elem.addEventListener("wheel", scroll, true);
        return () => {
            elem.removeEventListener("wheel", scroll, true);
        };
    }, [resume, isVisible]);
    const classes = [
        {
            class: 'first'
        },
    ]
    return (
        <div >
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
                                items?.map((item, index) => {
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
                                            src={item.icon} />
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
                                            className={style.mblImgTop} src={item.img} />
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
                        {/* <img draggable={false} src='/images/stories/croses.webp' className={style.bgImgBtm} /> */}

                        <div ref={animRef} className={style.crossesContainer}>
                            <div className='meinContainerAnimated'>
                                <div id='cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                // ref={ref}
                                                // variants={variants}
                                                // animate={isVisible ? "visible" : "hidden"}
                                                // transition={{ duration: 1.5, ease: "easeOut" }}
                                                // style={{ marginLeft: "50px" }}
                                                className={`${style.bgImgBtmGr} ${item.class}`}
                                            >
                                                <img src='/images/stories/greenCross.png'
                                                />
                                            </motion.div>
                                        })
                                    }
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants2}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 1.5, ease: "easeOut" }}
                                                    // style={{ marginLeft: "50px" }}
                                                    className={`${style.bgImgBtmGlr} ${item.class}`}
                                                >
                                                    <img src='/images/stories/goldenCross.webp'
                                                    />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants2}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 1.5, ease: "easeOut" }}
                                                    // style={{ marginLeft: "50px" }}
                                                    className={`${style.bgImgBtmPlr} ${item.class}`}
                                                >
                                                    <img src='/images/stories/purpleCross.png'
                                                    />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants2}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 1.5, ease: "easeOut" }}
                                                    // style={{ marginLeft: "50px" }}
                                                    className={`${style.bgImgBtmRed} ${item.class}`}
                                                >
                                                    <img src='/images/stories/redCross.png'
                                                    />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div ref={animRef2} className={style.boxesContainer}>
                            <div className='meinContainerAnimated'>
                                <div id='cube'>
                                    {
                                        classes.map((item, index) => {
                                            return <motion.div
                                                key={index}
                                                // ref={ref}
                                                // variants={variants3}
                                                // animate={isVisible ? "visible" : "hidden"}
                                                // transition={{ duration: 1.5, ease: "easeOut" }}
                                                className={`${style.bgImgLarge} ${item.class}`}>
                                                <img src='/images/stories/largeBox.png' />
                                            </motion.div>
                                        })
                                    }
                                </div>
                                <div ref={animRef3} className={style.bgImgLeftContainer}>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants3}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className={`${style.bgImgLeft} ${item.class}`}>
                                                    <img src='/images/stories/leftBox.png' />
                                                </motion.div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div ref={animRef4} className={style.rightBoxContainer}>
                                    <div id='cube'>
                                        {
                                            classes.map((item, index) => {
                                                return <motion.div
                                                    key={index}
                                                    // ref={ref}
                                                    // variants={variants3}
                                                    // animate={isVisible ? "visible" : "hidden"}
                                                    // transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className={`${style.bgImgRight} ${item.class}`}>
                                                    <img src='/images/stories/rightBox.png' />
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
                                        items?.map((item, index) => {
                                            return <div>
                                                <div
                                                    onMouseEnter={() => setWhichCard('active')}
                                                    onMouseLeave={() => setWhichCard('')}
                                                    key={index} className={whichCard === "active" ? style.singleImgContainerBlur : style.singleImgContainer}>
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
                                                <div
                                                    className={style.btmRowInSlider}
                                                >
                                                    <div
                                                        onMouseEnter={() => setWhichCard('active')}
                                                        onMouseLeave={() => setWhichCard('')}
                                                        key={index} className={whichCard === "active" ? style.singleImgContainerBlur : style.singleImgContainer}>
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
                                                </div>
                                            </div>
                                        })
                                    }
                                </Slider>
                            </div>


                            {/* <div className={`${style.bottomContainer} storiesBtmRow`}>
                                <Slider
                                    {...settings}
                                    className={style.slider}
                                >
                                    {
                                        items?.map((item, index) => {
                                            return <div
                                                onMouseEnter={() => setWhichCard('active')}
                                                onMouseLeave={() => setWhichCard('')}
                                                key={index} className={whichCard === "active" ? style.singleImgContainerBlur : style.singleImgContainer}>
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
                            </div> */}

                        </div>

                    </div>
            }
        </div >
    )
}

export default Stories1