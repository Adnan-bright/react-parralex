import React from 'react'
import * as style from '../../styles/components/heroVer2.module.css'
import { useParallax } from 'react-scroll-parallax';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import PlayIcon from '../../../static/icons/playIcon.png'

function HeroVer2() {


    const startAndEnd = {
        startScroll: 0,
        endScroll: window.innerWidth
      };

      const a = useParallax({
        ...startAndEnd,
        translateX: ["-100px", "0px"],
        speed: 5
      });
      const b = useParallax({
        ...startAndEnd,
        translateX: ["100px", "0px"],
        speed: -5
      });

    return (
        <div className={style.main}>
            {/* <Header /> */}
            <div className={style.content}>
                <h1 className={style.mainHeading1} ref={b.ref}>Creative support </h1>
                <h1 className={style.mainHeading1} ref={a.ref}>Creative support </h1>
                <h1 className={style.mainHeading1}>Creative support </h1>
                <div className={style.playIconContainer}>
                        <img src={PlayIcon} alt='PlayIcon' />
                    </div>
                    {/* <h1 className={style.mainHeading2}>at an affordable cost.</h1> */}
            </div>
        </div>
    )
}

export default HeroVer2