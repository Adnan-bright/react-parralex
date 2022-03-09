import React, {useRef, useState, useEffect} from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import * as style from '../../styles/components/layout.module.css'
import Header from "../header/Header";
import { Parallax} from '@react-spring/parallax'
import { useWheel } from '@use-gesture/react'
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
export default function Layout({ children }) {
    const [isWheel, setIsWheel] = useState(0)
    const [oldIsWheel, setOldIsWheel] = useState(0)
    const [offSet, setOffSet] = useState(0)
    const ref = useRef(null)
    const onClick = (num) => {
        ref?.current?.scrollTo(num)

    }
    useEffect(() => {
        ref?.current?.scrollTo(isWheel)

        console.log('num', ref?.current.offset)
    }, [isWheel])
    
    const onWheel = (e) => {
        if (e.deltaY > 0) {
            setIsWheel(isWheel+1)
        }
        if (e.deltaY < 0) {
            setIsWheel(isWheel-1)
        }
    console.log('isWheel')
        
    }
    return (
        <div  className={style.main}>
            <div className={style.headerContainer}><div className={style.header}><Header navClick={onClick} /></div></div>
            <Parallax
            onWheelCapture={(e)=> onWheel(e)}
            ref={ref} horizontal={true} pages={5} style={{ top: '0', left: '0' }} scrollAxis="horizontal">
                {children}
            </Parallax>
        </div>
    )
}