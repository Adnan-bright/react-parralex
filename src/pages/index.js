import React, { useRef, useEffect } from "react";
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


// markup
const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const anchorRef = useRef();

  useEffect(() => {
    // GSAPHorizontalScroll();
    const element = ref.current;
    console.log('element', element.querySelector(".container"),)

    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=3500"
      },
    });

  }, []);


  const handleClick = (id) => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, { duration: 3, scrollTo: id });
  }


  return (
    <Layout onNavClick={handleClick}>
      <div style={{
        marginTop: "1px"
      }}>

      </div>
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
          <div id={'panel-3'} ref={anchorRef} className="panel">
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
