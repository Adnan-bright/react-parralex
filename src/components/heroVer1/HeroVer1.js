import React from 'react'
import * as style from '../../styles/components/heroVer1.module.css'
import { Parallax } from 'react-scroll-parallax';

function HeroVer1() {
    return (
        <div className={style.main}>
            {/* <Header /> */}
            <div className={style.content}>
                <Parallax  >
                    <h1 className={style.mainHeading1}>Creative support</h1>
                </Parallax>
                <Parallax  speed={10}>

                    <h1 className={style.mainHeading2}>for your business</h1>
                </Parallax>
                <Parallax  >

                    <h1 className={style.mainHeading3}>at an affordable cost.</h1>
                </Parallax>
            </div>
        </div>
    )
}

export default HeroVer1