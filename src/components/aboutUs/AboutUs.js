import React from 'react'
import * as style from '../../styles/components/aboutUs.module.css'
import CrossIcon from '../../../static/icons/crossIcon.png'
import { Parallax } from 'react-scroll-parallax';
import Boxes from '../../../static/images/about-us/boxes.png'

function AboutUS() {
    return (
        <div className={style.main}>
            <div  className={style.body}>
                <Parallax>
                    <p className={style.title}>About us</p>
                </Parallax>
                <Parallax>

                    <p className={style.paragraph}>We build creative experiences.<br />
                        As a Dallas based studio that utilizes multiple<br />
                        disciplines to pioneer new ideas through film,<br />
                        design, and creative technology.<br />
                        Our goal is your success.
                    </p>
                </Parallax>
                <Parallax>
                    <div className={style.button}>
                        <p className={style.buttonTitle}>Read more</p>
                    </div>
                </Parallax>

            </div>

        </div>
    )
}

export default AboutUS