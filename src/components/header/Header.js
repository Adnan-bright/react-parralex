import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/header.module.css'
import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

function Header({ navClick }) {
  const [toggle, setToggle] = useState(false)
  const [isSmall, setIsSmall] = useState(0)
  const [nav, setNav] = useState('')
  if (typeof window !== 'undefined') {
    var width = window.matchMedia("(max-width: 768px)").matches
  }
  useEffect(() => {
    setIsSmall((window.innerWidth / 2) + 140.5)
  }, [width])
  console.log('isSmall', isSmall)
  // const tabs = ['about', 'services', 'stories', 'process', 'Contact us']
  return (
    <div className={style.main}>
      <div className={style.headerBar}>
        <div className={style.logoContainer}>
          <Link > <img onClick={() => {setNav(''); navClick(0)} } className={style.logo} src="/images/common/logo.png" alt="Logo" /></Link>
        </div>
        <div className={toggle ? style.tabsContainerHide : style.tabsContainer}>
          {toggle ? <img onClick={() => setToggle(false)} className={style.icon} src="/icons/close.png" /> :
            <img onClick={() => setToggle(true)} className={style.icon} src="/icons/menu.png" />}
          <Link className={nav === '#panel-2'? style.tabFill : style.tab} >
            <p 
            onClick={() => {setNav('#panel-2'); navClick(1)} }
            >About</p>
          </Link>
          <Link >
            <p onClick={() => {setNav('#panel-3'); navClick(2)} } className={nav === '#panel-3'? style.tabFill : style.tab}>Services</p>
          </Link>
          <Link >
            <p onClick={() => {setNav('#panel-4'); navClick(3)} } className={nav === '#panel-4'? style.tabFill : style.tab}>Stories</p>
          </Link>
          <Link >
            <p onClick={() => {setNav('#panel-5'); navClick(4)} } className={nav === '#panel-5'? style.tabFill : style.tab}>Process</p>
          </Link>
          <Link >
            <p onClick={() => {setNav('#panel-6'); navClick(5)} } className={nav === '#panel-6'? style.tabFill : style.tab}>Contact us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header