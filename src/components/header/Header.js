import React, {useState, useEffect} from 'react'
import * as style from '../../styles/components/header.module.css'
// import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const [toggle, setToggle] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
 var width = window.matchMedia("(max-width: 768px)").matches
 useEffect(() => {
 if (width) {
      setToggle(true)
      setIsSmall(true)
    }
  }, [width])
  const tabs = ['about', 'services', 'stories', 'process', 'Contact us']
  return (
    <div className={style.main}>
      <div className={style.headerBar}>
        <div className={style.logoContainer}>
          <img className={style.logo} src="/images/common/logo.png" alt="Logo" />
        </div>
        <div className={ toggle ? style.tabsContainerHide: style.tabsContainer}>
       {toggle? <img onClick={()=> setToggle(false)} className={style.icon} src="/icons/close.png" />:
          <img onClick={()=> setToggle(true)} className={style.icon} src="/icons/menu.png" />}
            {
            tabs.map((item, index) => {
              return <p key={index} className={ style.tab}>{item} </p>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Header