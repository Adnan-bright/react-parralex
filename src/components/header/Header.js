import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/header.module.css'
import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

function Header({navClick}) {
  const [toggle, setToggle] = useState(false)
  const [isSmall, setIsSmall] = useState(0)
  if (typeof window !== 'undefined') {
    var width = window.matchMedia("(max-width: 768px)").matches
  }
  useEffect(() => {
      setIsSmall((window.innerWidth/2)+140.5)
  }, [width])
  console.log('isSmall', isSmall)
  // const tabs = ['about', 'services', 'stories', 'process', 'Contact us']
  return (
    <div className={style.main}>
      <div className={style.headerBar}>
        <div className={style.logoContainer}>
         <Link > <img onClick={()=> navClick(0)} className={style.logo} src="/images/common/logo.png" alt="Logo" /></Link>
        </div>
        <div className={toggle ? style.tabsContainerHide : style.tabsContainer}>
          {toggle ? <img onClick={() => setToggle(false)} className={style.icon} src="/icons/close.png" /> :
            <img onClick={() => setToggle(true)} className={style.icon} src="/icons/menu.png" />}
          <Link className={style.tab} >
            <p onClick={()=> navClick(700)}>About</p>
          </Link>
          <Link >
            <p onClick={()=> navClick(isSmall+isSmall/2)} className={style.tab}>Services</p>
          </Link>
          <Link >
            <p  onClick={()=> navClick(isSmall*3)}className={style.tab}>Stories</p>
          </Link>
          <Link >
            <p onClick={()=> navClick(isSmall*4)} className={style.tab}>Process</p>
          </Link>
          <Link >
            <p onClick={()=> navClick(isSmall*5)} className={style.tab}>Contact us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header