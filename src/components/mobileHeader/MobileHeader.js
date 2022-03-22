import React, { useState } from 'react'
import * as style from '../../styles/components/mobileHeader.module.css'
function MobileHeader() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={style.top}>
            <div className={style.header}>
                <div className={style.topBar}>
                    <img
                        onClick={() => setToggle(false)}
                        className={style.logo}
                        src="/images/common/logo.webp" alt='Mag-Raw' />
                    <img
                        onClick={() => setToggle(!toggle)}
                        className={style.toggle}
                        src={!toggle ? '/images/common/toggle.png' : "/images/common/crossIcon.png"} />
                </div>
                <div className={toggle ? style.contentContainer : style.contentContainerHide}>
                    <center>
                        <div className={style.rows}>
                            <p className={style.row}> about</p>
                            <p className={style.row}> services</p>
                            <p className={style.row}> stories</p>
                            <p className={style.row}> process</p>
                            <p className={style.row}> Contact us</p>
                        </div>
                    </center>
                    <center>
                        <img 
                        className={style.bg}
                        src='/images/common/navBg.png' />

                    </center>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader