import React from 'react'
import * as style from '../../styles/components/heroVer2.module.css'
import { Parallax } from 'react-scroll-parallax';

function HeroVer2() {
    return (
        <div className={style.main}>
            {/* <Header /> */}
            <div className={style.content}>
                <Parallax  >
                <h1 className={style.mainHeading1}>Creative support <br /> for your business</h1>
                    <h1 className={style.mainHeading2}>at an affordable cost.</h1>
                </Parallax>
            </div>
        </div>
    )
}

export default HeroVer2