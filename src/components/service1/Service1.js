import React, { useState } from 'react'
import * as style from '../../styles/components/service1.module.css'

function Service1() {
    const [whichCard, setWhichCard] = useState('')
    return (
        <div
            className={style.main}
        >
            <div className={style.bgBoxes}>
                <img src='/images/about-us/boxes.png' />
            </div>
            <div
            >
                <h1 className={style.heading}>services</h1>
            </div>
            <div className={style.imagesContainer}>
                <div
                    onMouseEnter={() => setWhichCard('film')}
                    onMouseLeave={() => setWhichCard('')}
                    style={{
                        filter: whichCard !== '' && whichCard !== 'film' ? "blur(3px)" : "blur(0px)",
                    }}
                    className={style.imgCont}> <img className={style.imgItem} src='/images/services/img1.png' />
                    <h2 className={style.imgText}>film</h2>
                    <p className={style.imglowerText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                    <img className={style.playIcon} src='/icons/playIcon.png' />
                </div>
                <div
                >
                    <div
                        onMouseEnter={() => setWhichCard('design')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'design' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img2.png' />
                        <h2 className={style.imgText}>Design</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </div>
                <div
                >
                    <div
                        onMouseEnter={() => setWhichCard('tech')}
                        onMouseLeave={() => setWhichCard('')}
                        style={{
                            filter: whichCard !== '' && whichCard !== 'tech' ? "blur(3px)" : "blur(0px)",
                        }}
                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img3.png' />
                        <h2 className={style.imgText}>Tech</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1