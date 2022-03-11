import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/header.module.css'
import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap";

function Header({navClick}) {
  const [toggle, setToggle] = useState(false)
  const [isSmall, setIsSmall] = useState(0)
  if (typeof window !== 'undefined') {
    var width = window.matchMedia("(max-width: 768px)").matches
  }
  document.querySelectorAll(".anchor").forEach(element => {
    element.addEventListener('click', function () {

      const id = this.getAttribute('href').split('#')[1];

      gsap.to(window, {
        scrollTo: (document.getElementById(id).offsetLeft * (document.querySelector(".container").offsetWidth / (document.querySelector(".container").offsetWidth - window.innerWidth))),
        duration: 2
      })

    });
  });
  useEffect(() => {
      setIsSmall((window.innerWidth/2)+140.5)
  }, [width])
  console.log('isSmall', isSmall)
  // const tabs = ['about', 'services', 'stories', 'process', 'Contact us']
  return (
    <div className={style.main}>
      <div className={style.headerBar}>
        <div className={style.logoContainer}>
         <a href="#panel-1"> <img  className={style.logo} src="/images/common/logo.png" alt="Logo" /></a>
        </div>
        <div className={toggle ? style.tabsContainerHide : style.tabsContainer}>
          {toggle ? <img onClick={() => setToggle(false)} className={style.icon} src="/icons/close.png" /> :
            <img onClick={() => setToggle(true)} className={style.icon} src="/icons/menu.png" />}
          <Link  >
            <a href="#panel-2" className={style.tab}>About</a>
          </Link>
          <Link >
            <a href="#panel-3" className={style.tab}>Services</a>
          </Link>
          <Link >
            <a href="#panel-4"  className={style.tab}>Stories</a>
          </Link>
          <Link >
            <a href="#panel-5" className={style.tab}>Process</a>
          </Link>
          <Link >
            <a href="#panel-6" className={style.tab}>Contact us</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header