import React, { useRef, useEffect } from "react";
import * as style from '../styles/index.module.css'
import HeroVer1 from "../components/heroVer1/HeroVer1"
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import useScrollOnDrag from "react-scroll-ondrag";
import HeroVer2 from "../components/heroVer2/HeroVer2";
import Layout from "../components/layout/Layout";
import { Slider } from "../components/slider/Slider";
import { a } from '@react-spring/web'

// markup
const IndexPage = () => {
  const ref = useRef()

  const scrollRef = useHorizontalScroll();

  const runScroll = scrollRef => ({ dx }) => {
    scrollRef.current.scrollLeft += dx * 20; // eslint-disable-line no-param-reassign
  }
  const { events } = useScrollOnDrag(scrollRef, {
    runScroll: runScroll && runScroll(scrollRef)
  });



  // The phone screen moves up vertically

  const items = [
    <HeroVer1 />,
    // <HeroVer2 />,
  ]
  //  const items = [
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 150,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 300,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 300,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 300,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 300,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 300,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 200,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 300,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 200,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 400,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 200,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 150,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 400,
  //   },
  //   {
  //     css:
  //       'url(https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  //     height: 200,
  //   },
  // ]
  return (
    <Layout>
             {/* <Slider items={items} width={700} visible={3}>
          {({ css }, i) => (
            <div className={style.content}>
              <div className={style.marker}>{String(i).padStart(2, '0')}</div>
              <a.div className={style.image} style={{ backgroundImage: css }} />
            </div>
          )}
        </Slider> */}
      <div className={style.sMain}
        ref={scrollRef} {...events}
      >
          {
            items.map((item, index) => {
              return <div  className={style.item}>{item}</div>
            })
          }
      </div>
    </Layout>

  )
}

export default IndexPage
