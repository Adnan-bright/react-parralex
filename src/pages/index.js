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
  const hero1Ref = useRef(null);

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

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
      },
    });
  }, []);



  const onClickHandler = (num) => {
    let sections = gsap.utils.toArray(".panel");
    console.log('3 / (sections.length - 1)', num * (sections.length))
    let value = num * (sections.length)
    gsap.registerPlugin(ScrollToPlugin);
    try {
      if (typeof window !== 'undefined') {
        gsap.to(window, { duration: 2, value});
      }
    } catch (error) {
      alert(error)
    }
  }
  console.log('ref', ref.current)

  return (
    <Layout onNavClick={onClickHandler}  >
      <div
        ref={ref}
      >
        {/* <a href="#panel1" style={{
          marginTop:"200px"
        }}>clik</a> */}
        <div className="container">
          <div className="panel">
            <HeroVer1 />
          </div>
          <div id={'panel1'} className="panel">
            <AboutUS />
          </div>
          <div className="panel">
            <Service1 />
          </div>
          <div className="panel">
            <Stories1 />
          </div>
          <div className="panel">
            <Process />
          </div>
          <div className="panel">
            <Contact1 />
          </div>


        </div>
      </div>
    </Layout>

  )
}

export default IndexPage
