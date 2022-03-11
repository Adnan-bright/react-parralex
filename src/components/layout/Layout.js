import React, { useRef, useState, useEffect } from "react"
import * as style from '../../styles/components/layout.module.css'
import Header from "../header/Header";

export default function Layout({ children, onNavClick }) {

 
    return (
        <div className={style.main}>
            <div className={style.headerContainer}><div className={style.header}><Header navClick={onNavClick} /></div></div>
       
                {children}
        </div>
    )
}