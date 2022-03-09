import React from 'react'
import * as style from '../../styles/components/service1.module.css'
import { ParallaxLayer } from "@react-spring/parallax";

function Service1() {
    return (
        <div
            className={style.main}
        >
            <ParallaxLayer
            offset={2}
            speed={1.5}
            >
            <h1 className={style.heading}>services</h1>
            </ParallaxLayer>
            <div className={style.imagesContainer}>
                <ParallaxLayer
                    offset={2.06}
                    speed={.6}
                    style={{ marginTop: "180px", marginLeft:"50px" }}
                >
                    <div className={style.imgCont}> <img className={style.imgItem} src='/images/services/img1.png' />
                        <h2 className={style.imgText}>film</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor </p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2.40}
                    speed={.5}
                    style={{ marginTop: "180px",}}
                >
                    <div className={style.imgCont}> <img className={style.imgItem} src='/images/services/img2.png' />
                        <h2 className={style.imgText}>Design</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                     offset={2.71}
                     speed={.4}
                    style={{ marginTop: "180px", }}
                >
                    <div className={style.imgCont}> <img className={style.imgItem} src='/images/services/img3.png' />
                        <h2 className={style.imgText}>Tech</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor </p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </ParallaxLayer>
            </div>
        </div>
    )
}

export default Service1