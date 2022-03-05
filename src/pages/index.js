import React, { useRef, useEffect } from "react";
import Header from "../components/header/Header"
import * as style from '../styles/index.module.css'
import HeroVer1 from "../components/heroVer1/HeroVer1"
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import useScrollOnDrag from "react-scroll-ondrag";
import HeroVer2 from "../components/heroVer2/HeroVer2";

// markup
const IndexPage = () => {
  const ref = useRef()
  const scrollRef = useHorizontalScroll();

  const runScroll=scrollRef => ({ dx }) => {
    scrollRef.current.scrollLeft += dx* 20 ; // eslint-disable-line no-param-reassign
  }
  const { events } = useScrollOnDrag(scrollRef, {
    runScroll: runScroll && runScroll(scrollRef)
  });




  const items = [
    <HeroVer1 />,
    <HeroVer2 />

  ]
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className={style.main}>
        <div className={style.header}><Header /></div>
          <div  className={style.sMain}
          ref={scrollRef} {...events}
        >
          {
            items.map((item, index) => {
              return <div onDrag={(e)=> console.log('w', e)} className={style.item}>{item}</div>
            })
          }
        </div>
      </div>
    </ParallaxProvider>

  )
}

export default IndexPage
