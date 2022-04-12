import React, { useState, useEffect, useRef } from 'react'
import * as style from '../../styles/components/mobileHeader.module.css'
function MobileHeader() {
    const [toggle, setToggle] = useState(false)
    const [checkActive, setCheckActive] = useState('')
    const [scrollValue, setScrollValue] = useState(0)
// get scroll Y Value runTime
    const scrollY = useRef(0)
    const handleScroll = () => {
        scrollY.current = window.scrollY
        setScrollValue(scrollY.current)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div ref={scrollY}
        style={{
            backgroundColor: scrollValue > 60 ? 'black' : 'transparent',
        }}
        className={style.top}
        >
            <div className={style.header} >
                <div className={style.topBar}>
                   <a href='#verticalPanel-1'>
                   <img
                        onClick={() => { setToggle(false); setCheckActive('') }}
                        className={style.logo}
                        src="/images/common/logo.png" alt='Mag-Raw' />
                   </a>
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