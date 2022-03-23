import React, { useState } from 'react'
import * as style from '../../styles/components/mobileHeader.module.css'
function MobileHeader() {
    const [toggle, setToggle] = useState(false)
    const [checkActive, setCheckActive] = useState('')
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
                            <p className={style.row}><a
                                onClick={() => { setToggle(false); setCheckActive('about') }}
                                style={{
                                    color: checkActive === 'about' ? 'gray' : 'white'
                                }}

                                href='#verticalPanel-2' >about     </a>  </p>
                            <p className={style.row}><a
                                onClick={() => { setToggle(false); setCheckActive('services') }}
                                style={{
                                    color: checkActive === 'services' ? 'gray' : 'white'
                                }}

                                href='#verticalPanel-3' >services  </a>  </p>
                            <p className={style.row}><a
                                onClick={() => { setToggle(false); setCheckActive('stories') }}
                                style={{
                                    color: checkActive === 'stories' ? 'gray' : 'white'
                                }}

                                href='#verticalPanel-4' >stories   </a>  </p>
                            <p className={style.row}><a
                                onClick={() => { setToggle(false); setCheckActive('process') }}
                                style={{
                                    color: checkActive === 'process' ? 'gray' : 'white'
                                }}

                                href='#verticalPanel-5' >process   </a>  </p>
                            <p className={style.row}><a
                                onClick={() => { setToggle(false); setCheckActive('Contact') }}
                                style={{
                                    color: checkActive === 'Contact' ? 'gray' : 'white'
                                }}

                                href='#verticalPanel-6' >Contact us</a>  </p>
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