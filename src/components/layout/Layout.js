import React, { useRef, useState, useEffect } from "react"
import * as style from '../../styles/components/layout.module.css'
import Header from "../header/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Layout({ children, onNavClick, hoverValue }) {

 
    return (
        <div className={style.main}>
            <div className={style.headerContainer}><div className={style.header}><Header hoverValue={hoverValue} navClick={onNavClick} /></div></div>
       
                {children}
        </div>
    )
}