import React from 'react'
import * as style from '../../styles/components/service1.module.css'

function Service1() {
    return (
        <div
            className={style.main}
        >
            <div
            >
                <h1 className={style.heading}>services</h1>
            </div>
            <div className={style.imagesContainer}>
                <div
                >
                    <div className={style.imgCont}> <img className={style.imgItem} src='/images/services/img1.png' />
                        <h2 className={style.imgText}>film</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </div>
                <div
                >
                    <div className={style.imgCont}> <img className={style.imgItem} src='/images/services/img2.png' />
                        <h2 className={style.imgText}>Design</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </div>
                <div
                >
                    <div className={style.imgCont}> <img className={style.imgItem} src='/images/services/img3.png' />
                        <h2 className={style.imgText}>Tech</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1