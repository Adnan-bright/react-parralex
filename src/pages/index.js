import React, { useRef, useEffect, useState } from "react";
// import * as style from '../styles/index.module.css'
import '../styles/index.css'
import HeroVer1 from "../components/heroVer1/HeroVer1"
import Layout from "../components/layout/Layout";
import AboutUS from "../components/aboutUs/AboutUs";
import Service1 from "../components/service1/Service1";
import Stories1 from "../components/stories1/Stories1";
import Contact1 from "../components/contact/Contact1";
import Process from "../components/process/Process";
import { gsap } from "gsap";
import { ScrollTrigger, } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";




// markup
const IndexPage = () => {
  const [num, setNum] = useState(0)
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const anchorRef = useRef();
  // useEffect(() => {
  //   const element = ref.current;

  //   let arrow = element.querySelector(".arrow");
  //   let arrowRight = element.querySelector(".arrow-right");
  //   if (arrow) {
  //     gsap.to(arrow, { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
  //   }

  //   if (arrowRight) {
  //     gsap.to(arrowRight, {
  //       x: -12,
  //       ease: "power1.inOut",
  //       repeat: -1,
  //       yoyo: true,
  //     });
  //   }
  // }, []);

  // function GSAPHorizontalScroll() {
  //   let Sections = gsap.utils.toArray(".panel");
  
  //   let GSAPHorizontalScrollTL = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#PageWrap",
  //       pin: true,
  //       start: "0% 0%",
  //       end:
  //         "+=" +
  //         (document.querySelector("#PageWrap").scrollWidth - window.innerWidth),
  //       scrub: 1,
  //       snap: {
  //         snapTo: 1 / (Sections.length - 1),
  //         duration: { min: 0.22, max: 0.31 },
  //         delay: 0,
  //         ease: "sine.inOut"
  //       }
  //       // markers: "true",
  //     }
  //   });
  //   GSAPHorizontalScrollTL.to(Sections, {
  //     xPercent: -100 * (Sections.length - 1),
  //     ease: "none"
  //   });
  // }

  useEffect(() => {
    // GSAPHorizontalScroll();

    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=3500"
      },
    });
  }, []);



  const handleClick = (id) => {
    // alert('Clicked')
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, { duration: 3, scrollTo: id });
  }





  return (
    <Layout onNavClick={handleClick}>

      <div onClick={handleClick} style={{ marginTop: '1px' }}></div>
      <div
        ref={ref}
      >

        <div className="container">
          <div id={'panel-1'} className="panel">
            <HeroVer1 />
          </div>
          <div id={'panel-2'} className="panel">
            <AboutUS />
          </div>
          <div id={'panel-3'} className="panel">
            <Service1 />
          </div>
          <div id={'panel-4'} className="panel">
            <Stories1 />
          </div>
          <div id={'panel-5'} className="panel">
            <Process />
          </div>
          <div id={'panel-6'} className="panel">
            <Contact1 />
          </div>


        </div>
      </div>
    </Layout>

  )
}

export default IndexPage
