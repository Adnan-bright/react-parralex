import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import * as style from '../../styles/components/layout.module.css'
import Header from "../header/Header";

export default function Layout({ children }) {
    return (
        <ParallaxProvider scrollAxis="horizontal">
            <div className={style.main}>
                <div className={style.headerContainer}><div className={style.header}><Header /></div></div>

                {children}
            </div>
        </ParallaxProvider>
    )
}