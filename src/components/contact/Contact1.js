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
                    <a className={style.tab}>
                        INSTAGRAM
                    </a>
                    <a className={style.tab}>
                        Facebook
                    </a>
                    <a className={style.tab}>
                        Linkedin
                    </a>
                    <a className={style.tab}>
                        youtube
                    </a>
                    <a className={style.tab}>
                        vimeo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact1