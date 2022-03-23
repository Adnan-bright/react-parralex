import React, { useRef, useEffect, useState } from "react";
import '../styles/index.css'
import HeroVer1 from "../components/heroVer1/HeroVer1"
import Layout from "../components/layout/Layout";
import AboutUS from "../components/aboutUs/AboutUs";
import Service1 from "../components/service1/Service1";
import Stories1 from "../components/stories1/Stories1";
import Contact1 from "../components/contact/Contact1";
import Process from "../components/process/Process";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import useWindowDimensions from "../hooks/getWindowDimension";

const IndexPage = () => {
  const { height, width } = useWindowDimensions();
  const [updateValue, setUpdateValue] = useState(0)
  const [detectChange, setDetectChange] = useState([])
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const ref = useRef(null);
  useEffect(() => {
    if (width >= 600) {
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1.6,
          onSnapComplete: snap => setDetectChange(snap),
          onUpdate: self => setUpdateValue(Math.round(self.progress * 10) / 10),
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.1, max: 0.2 },
            ease: "power1.inOut"
          },
          end: () => "+=3500"
        },
      });
    }

  }, []);

  const handleClick = (id) => {
    gsap.to(window, {
      scrollTo: 700 * id,
      duration: .5,
    })

  }

  if (typeof window === `undefined`) {
    return(<></>);
}
  return (
    <Layout isMobile={width >= 800 ? false : true} hoverValue={updateValue} onNavClick={handleClick}>

      <div
        ref={ref}
      >
        {width >= 600 ?
          <div
            className="container">
            <div id={'panel-1'} className="panel">
              <HeroVer1 isMobile={width < 600} />
            </div>
            <div id={'panel-2'} className="panel">
              <AboutUS isMobile={width < 600} />
            </div>
            <div id={'panel-3'} className="panel">
              <Service1 isMobile={width < 600} />
            </div>
            <div id={'panel-4'} className="panel">
              <Stories1 isMobile={width < 600} />
            </div>
            <div id={'panel-5'} className="panel">
              <Process isMobile={width < 600} />
            </div>
            <div id={'panel-6'} className="panel">
              <Contact1 isMobile={width < 600} />
            </div>
          </div>
          :
          <div
            className="verticalContainer">
            <div id={'verticalPanel-1'} className="verticalPanel">
              <HeroVer1 isMobile={width < 600} />
            </div>
            <div id={'verticalPanel-2'} className="verticalPanel">
              <AboutUS isMobile={width < 600} />
            </div>
            <div id={'verticalPanel-3'} className="verticalPanel">
              <Service1 isMobile={width < 600} />
            </div>
             <div id={'verticalPanel-4'} className="verticalPanel">
              <Stories1 isMobile={width < 600 } />
            </div>
           <div id={'verticalPanel-5'} className="verticalPanel">
              <Process isMobile={width < 600 } />
            </div>
            <div id={'verticalPanel-6'} className="verticalPanel">
              <Contact1 isMobile={width < 600 } />
            </div>
          </div>
        }
      </div>
    </Layout>

  )
}

export default IndexPage
