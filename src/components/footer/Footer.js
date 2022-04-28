import React, { useState } from 'react'
import * as style from '../../styles/components/footer.module.css'
import UseContact from '../contact/useContact'
function Footer() {
    const { socialData } = UseContact()
    const [whichIndex, setWhichIndex] = useState('')
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.copyrightContainer}>
                    <p className={style.copyRight}>© 2022 MAG-RAW Creations, LLC all rights reserved</p>
                </div>
                <div className={style.followContainer}>
                    <p className={style.follow}>FOLLOW</p><br />
                    <div className={style.tabs}>
                        {
                            socialData.map((item, index) => {
                                return <a
                                    href={item.link}
                                    target='_blank'
                                    key={index}
                                    onMouseLeave={() => setWhichIndex('')}
                                    onMouseEnter={() => setWhichIndex(item.linkTitle)}
                                    style={{
                                        backgroundImage: whichIndex === item.linkTitle ? `url(${item.hoverIcon})` : `url(${item.icon})`
                                    }}
                                    className={style.tab}>
                                </a>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer