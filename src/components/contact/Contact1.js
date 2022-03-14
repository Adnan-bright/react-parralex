import React from 'react'
import * as style from '../../styles/components/contact1.module.css'
import ReviewContainer from '../reviewContainer/ReviewContainer'

function Contact1({ id }) {
    return (
        <div className={style.body}>
            <div id={id} className={style.main}>
                <div className={style.midContainer}>
                    <div className={style.reviewContainer}>
                        {/* <ReviewContainer /> */}
                    </div>
                    <h1 className={style.heading}>CONTACT US</h1>
                    <div className={style.formContainer}>
                        <div className={style.topRow}>
                            <input type={'text'} placeholder='First name' />
                            <input type={'text'} placeholder='Last name' />
                        </div>
                        <div className={style.midRow}>
                            <input type={'text'} placeholder='Email' />
                            <input type={'text'} placeholder='Phone' />
                        </div>
                        <div className={style.lowerRow}>
                            <input type={'text'} placeholder='Message' />
                        </div>
                        <div className={style.btnContainer}> <div className={style.btn}>submit</div></div>
                    </div>
                </div>
               
            </div>
            <div className={style.copyrightContainer}>
                    <p className={style.copyRight}>© 2022 MAG-RAW Creations, LLC all rights reserved</p>
                </div>
                <div className={style.followContainer}>
                    <p className={style.follow}>FOLLOW</p><br />
                    <div className={style.tabs}>
                        <a className={style.tab1}>
                        </a>
                        <a className={style.tab2}>
                        </a>
                        <a className={style.tab3}>
                        </a>
                        <a className={style.tab4}>
                        </a>
                        <a className={style.tab5}>
                        </a>
                        <a className={style.tab6}>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Contact1