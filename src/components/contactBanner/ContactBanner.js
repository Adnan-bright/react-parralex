import React from 'react'
import * as style from '../../styles/components/contactBanner.module.css'
function ContactBanner() {
    return (
        <div className={style.main}>
            <div className={style.bgImageContainer}>
                <img src='/images/storiesViewAll/bg.png' className={style.bgImage} alt='Bg-Image' />
            </div>
            <div className={style.headingContainer}>
                <p className={style.heading}>
                    Getting to contacting us in a way
                </p>
                <center>
                    <div className={style.seeAllBtn}>
                        <p>contact us</p>
                    </div></center>
            </div>
        </div>
    )
}

export default ContactBanner