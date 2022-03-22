import React, { useRef, useState, useEffect } from "react"
import * as style from '../../styles/components/layout.module.css'
import Header from "../header/Header";
import MobileHeader from "../mobileHeader/MobileHeader";
export default function Layout({ children, onNavClick, hoverValue, isMobile }) {


    return (
        <div className={style.main}>
            <div className={style.headerContainer}>
                <div className={style.header}>
                   {!isMobile? <Header
                        isMobile={isMobile}
                        hoverValue={hoverValue} navClick={onNavClick}
                    />
                :
                <MobileHeader />
                }
                </div>
            </div>
            {children}
        </div>
    )
}