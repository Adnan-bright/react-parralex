import React from 'react'
import * as style from '../../styles/components/stories1.module.css'
function Stories1() {
    return (
        <div className={style.main}>
            <div className={style.upperContainer}>
                <h1 className={style.heading}>
                    our best stories
                </h1>
                <div className={style.btn}>
                see all work
                </div>
            </div>
            <div className={style.imagesContainer}>
                <img className={style.img1} src='/images/stories/1.png' />
                <img className={style.img2} src='/images/stories/2.png' />
                <img className={style.img3} src='/images/stories/3.png' />
                <img className={style.img4} src='/images/stories/4.png' />
                <img className={style.img5} src='/images/stories/5.png' />
                <img className={style.img6} src='/images/stories/6.png' />
                <img className={style.img7} src='/images/stories/7.png' />
                <img className={style.img8} src='/images/stories/8.png' />
                <img className={style.img9} src='/images/stories/9.png' />
                <img className={style.img10} src='/images/stories/10.png' />
                <img className={style.img11} src='/images/stories/11.png' />
            </div>
         
        </div>
    )
}

export default Stories1