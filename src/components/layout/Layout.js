import React, { useRef, useState, useEffect } from "react"
import * as style from '../../styles/components/layout.module.css'
import Header from "../header/Header";
import { Parallax } from '@react-spring/parallax'

export default function Layout({ children }) {

    const ref = useRef(null)
    const onClick = (num) => {
        ref?.current?.scrollTo(num)
    }

    if (typeof window !== 'undefined') {
        var thisEvent ;
        function createWheelStopListener(element, callback, timeout) {
            var handle = null;
            var onScroll = function (e) {
                
            if (handle) {
            thisEvent=e
            clearTimeout(handle);
                }
                handle = setTimeout(callback, timeout || 200); // default 200 ms
            };
            element.addEventListener('wheel', onScroll);
            return function () {
                element.removeEventListener('wheel', onScroll);
            };
        }

        // Example usage:

        createWheelStopListener(window, function (e) {
            console.log('onwheelstop', thisEvent);
            if (thisEvent?.deltaY > 0) {
                ref?.current?.scrollTo(ref?.current?.offset +1)
            }
            if (thisEvent?.deltaY < 0) {
                ref?.current?.scrollTo(ref?.current?.offset -1)
            }
        });
    }
    return (
        <div className={style.main}>
            <div className={style.headerContainer}><div className={style.header}><Header navClick={onClick} /></div></div>
            <Parallax
                className={style.mainContainer}
                ref={ref}
                horizontal={true} pages={6} style={{ top: '0', left: '0' }} >
                {children}
            </Parallax>
        </div>
    )
}