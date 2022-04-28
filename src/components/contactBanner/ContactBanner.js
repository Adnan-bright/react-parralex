import { navigate } from 'gatsby'
import gsap from 'gsap'
import React from 'react'
import * as style from '../../styles/components/contactBanner.module.css';

function ContactBanner() {



    const onClick = () => {
        navigate('/')
        gsap.to(window, {
            scrollTo: 5*700,
            duration: .5,
        })
    }
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
                    <div onClick={onClick} className={style.seeAllBtn}>
                        <p>contact us</p>
                    </div></center>
            </div>
        </div>
    )
}

export default ContactBanner