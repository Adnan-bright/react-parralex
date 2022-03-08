import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/header.module.css'
import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const [toggle, setToggle] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  if (typeof window !== 'undefined') {
    var width = window.matchMedia("(max-width: 768px)").matches
  }
  useEffect(() => {
    if (width) {
      setToggle(true)
      setIsSmall(true)
    }
  }, [width])
  // const tabs = ['about', 'services', 'stories', 'process', 'Contact us']
  return (
    <div className={style.main}>
      <div className={style.headerBar}>
        <div className={style.logoContainer}>
         <Link to='/'> <img className={style.logo} src="/images/common/logo.png" alt="Logo" /></Link>
        </div>
        <div className={toggle ? style.tabsContainerHide : style.tabsContainer}>
          {toggle ? <img onClick={() => setToggle(false)} className={style.icon} src="/icons/close.png" /> :
            <img onClick={() => setToggle(true)} className={style.icon} src="/icons/menu.png" />}
          <Link className={style.tab} to='/aboutus'>
            <p>About</p>
          </Link>
          <Link to='/services'>
            <p className={style.tab}>Services</p>
          </Link>
          <Link to='/stories'>
            <p className={style.tab}>Stories</p>
          </Link>
          <Link to='/process' >
            <p className={style.tab}>Process</p>
          </Link>
          <Link to='/contact' >
            <p className={style.tab}>Contact us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header