import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/header.module.css'
import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

function Header({ navClick, hoverValue }) {
  const [toggle, setToggle] = useState(false)
  const [nav, setNav] = useState('')
  const [value, setValue] = useState('')
  console.log('hoverValue', hoverValue)
  useEffect(() => {
    // setTimeout(() => {
    hoverValue === 0.2 ?
      setNav('#panel-2') :
      hoverValue === 0.4 ?
        setNav('#panel-3')
        : hoverValue === 0.6 ?
          setNav('#panel-4')
          : hoverValue === 0.8 ?
            setNav('#panel-5') :
            hoverValue === 1 ?
              setNav('#panel-6') :
              hoverValue === 0 ?
                setNav('') :
                setValue('')
    // }, 1000);


  }, [hoverValue])


  return (
    <div className={style.main}>
      <div className={style.headerBar}>
        <div className={style.logoContainer}>
          <Link > <img onClick={() => { setNav(''); navClick(0) }} className={style.logo} src="/images/common/logo.webp" alt="Logo" /></Link>
        </div>
        <div className={toggle ? style.tabsContainerHide : style.tabsContainer}>
          {toggle ? <img onClick={() => setToggle(false)} className={style.icon} src="/icons/close.webp" /> :
            <img onClick={() => setToggle(true)} className={style.icon} src="/icons/menu.webp" />}
          <Link className={nav === '#panel-2' ? style.tabFill : style.tab} >
            <div
              className={style.tabContainer}
            >
              <p
                onClick={() => { navClick(1) }}
              >About</p>
              <img
                style={{
                  opacity: nav === '#panel-2' ? 1 : 0,
                  transition: "easeInOut .4s"
                }}
                className={style.dot} src='icons/dot.webp' />
            </div>
          </Link>
          <Link >
            <div
              className={style.tabContainer}
            >
              <p onClick={() => { navClick(2) }} className={nav === '#panel-3' ? style.tabFill : style.tab}>Services</p>
              <img
                style={{
                  opacity: nav === '#panel-3' ? 1 : 0,
                  transition: "easeInOut .4s"
                }}
                className={style.dot} src='icons/dot.webp' />
            </div>
          </Link>
          <Link >
            <div
              className={style.tabContainer}
            >
              <p onClick={() => { navClick(3) }} className={nav === '#panel-4' ? style.tabFill : style.tab}>Stories</p>
              <img
                style={{
                  opacity: nav === '#panel-4' ? 1 : 0,
                  transition: "easeInOut .4s"
                }}
                className={style.dot} src='icons/dot.webp' />
            </div>
          </Link>
          <Link >
            <div
              className={style.tabContainer}
            >
              <p onClick={() => { navClick(4) }} className={nav === '#panel-5' ? style.tabFill : style.tab}>Process</p>
              <img
                style={{
                  opacity: nav === '#panel-5' ? 1 : 0,
                  transition: "easeInOut .4s"
                }}
                className={style.dot} src='icons/dot.webp' />
            </div>
          </Link>
          <Link >
            <div
              className={style.tabContainer}
            >
              <p onClick={() => { navClick(5) }} className={nav === '#panel-6' ? style.tabFill : style.tab}>Contact us</p>
              <img
                style={{
                  opacity: nav === '#panel-6' ? 1 : 0,
                  transition: "easeInOut .4s"
                }}
                className={style.dot} src='icons/dot.webp' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header