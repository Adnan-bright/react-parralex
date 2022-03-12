import React from 'react'
import * as style from '../../styles/components/stories1.module.css'
function Stories1() {
    return (
        <div className={style.main}>
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
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/1.png' />
                    </div>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/2.png' />
                    </div>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/3.png' />
                    </div>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/4.png' />
                    </div>
                </div>
                <div className={style.bottomContainer}>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/1.png' />
                    </div>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/2.png' />
                    </div>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/3.png' />
                    </div>
                    <div className={style.singleImgContainer}>
                        <img className={style.imgTop} src='/images/stories/4.png' />
                    </div>
                </div>


                {/* <div className={style.singleImgContainer}>
                    <img className={style.img5} src='/images/stories/5.png' />
                </div>

                <div className={style.singleImgContainer}>

                    <img className={style.img6} src='/images/stories/6.png' />

                </div>
                <div className={style.singleImgContainer}>

                    <img className={style.img7} src='/images/stories/7.png' />

                </div>
                <div className={style.singleImgContainer}>

                    <img className={style.img8} src='/images/stories/8.png' />

                </div>
                <div className={style.singleImgContainer}>

                    <img className={style.img9} src='/images/stories/9.png' />

                </div>
                <div className={style.singleImgContainer}>

                    <img className={style.img10} src='/images/stories/10.png' />

                </div>
                <div className={style.singleImgContainer}>

                    <img className={style.img11} src='/images/stories/11.png' />

                </div> */}
            </div>

        </div>
    )
}

export default Stories1