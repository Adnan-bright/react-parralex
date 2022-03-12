import React from 'react'
import * as style from '../../styles/components/contact1.module.css'

function Contact1({id}) {
    return (
        <div id={id} className={style.main}>
            <div className={style.midContainer}>
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
            <div className={style.copyrightContainer}>
                <p className={style.copyRight}>© 2022 MAG-RAW Creations, LLC all rights reserved</p>
            </div>
            <div className={style.followContainer}>
                <p className={style.follow}>FOLLOW</p><br />
                <div className={style.tabs}>
                    <a className={style.tab1}>
                        {/* <img src='/images/contact/insta.png' /> */}
                    </a>
                    <a className={style.tab2}>
                    {/* <img src='/images/contact/facebook.png' /> */}
                    </a>
                    <a className={style.tab3}>
                    {/* <img src='/images/contact/twitter.png' /> */}
                    </a>
                    <a className={style.tab4}>
                    {/* <img src='/images/contact/linkedin.png' /> */}
                    </a>
                    <a className={style.tab5}>
                    {/* <img src='/images/contact/youtube.png' /> */}
                    </a>
                    <a className={style.tab6}>
                    {/* <img src='/images/contact/vimeo.png' /> */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact1