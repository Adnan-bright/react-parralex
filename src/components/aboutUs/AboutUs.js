import React from 'react'
import * as style from '../../styles/components/aboutUs.module.css'

function AboutUS() {

    return (
        <div className={style.main}>
            <div className={style.bgCross}>
                <img src='/images/about-us/cross.png' />
            </div>
    
            <div 
            className={style.body}>
                    <p className={style.title}>About us</p>

                    <p className={style.paragraph}>We build creative experiences.<br />
                        As a Dallas based studio that utilizes multiple<br />
                        disciplines to pioneer new ideas through film,<br />
                        design, and creative technology.<br />
                        Our goal is your success.
                    </p>
                    {/* <div className={style.button}>
                        <p className={style.buttonTitle}>Read more</p>
                    </div> */}
            </div>

        </div>
    )
}

export default AboutUS