import React, { useRef, useEffect, useState, useContext } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { gsap } from "gsap";

import "../styles/index.css";
import Layout from "../components/layout/Layout";
import AboutUS from "../components/aboutUs/AboutUs";
import Process from "../components/process/Process";
import UseWindowDimension from "../hooks/useWindowDimension";
import HeroVer from "../components/heroVer/HeroVer";
import Contact from "../components/contact/Contact";
import Service from "../components/service/Service";
import Stories from "../components/stories/Stories";
import { DataContext } from "../components/Provider/Provider";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

const IndexPage = () => {
  const [isChanged, setIsChanged] = useState(false)
  const { width } = UseWindowDimension();
  const [updateValue, setUpdateValue] = useState(0);
  const [detectChange, setDetectChange] = useState([]);
  const { story } = useContext(DataContext);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const ref = useRef(null);

  var tween;
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    if (width >= 600) {
      tween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1.6,
          onSnapComplete: (snap) => setDetectChange(snap),
          onUpdate: (self) =>
            setUpdateValue(Math.round(self.progress * 10) / 10),
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.1, max: 0.2 },
            ease: "power1.inOut",
          },
          end: () => "+=3500",
          
        },
      });

      if (story) {
        gsap.to(window, {
          scrollTo: 700 * 3,
          duration: 0.5,
        });
      }
    }
  }, []);


  const handleClick = (id) => {
    gsap.to(window, {
      scrollTo: 700 * id,
      duration: 0.5,
    });
  };

  // For  Getsby intial rendering
  if (typeof window === `undefined`) {
    return <></>;
  }
  return (
    <Layout
      isVertical={false}
      isMobile={width >= 800 ? false : true}
      hoverValue={updateValue}
      onNavClick={handleClick}
    >
      <Helmet>
        <title>Mag-Raw</title>
        <meta name="description" content="mag-raw is creative support for your business at an affordable cost." />
      </Helmet>
      <div ref={ref}>
        {width >= 600 ? (
          <div id="newId" className="container">
            <div id={"panel-1"} className="panel">
              <HeroVer isMobile={width < 600} />
            </div>
            <div id={"panel-2"} className="panel">
              <AboutUS isMobile={width < 600} />
            </div>
            <div id={"panel-3"} className="panel">
              <Service isMobile={width < 600} />
            </div>
            <div id={"panel-4"} className="panel">
              <Stories  isMobile={width < 600} />
            </div>
            <div id={"panel-5"} className="panel">
              <Process isMobile={width < 600} />
            </div>
            <div id={"panel-6"} className="panel">
              <Contact isMobile={width < 600} />
            </div>
          </div>
        ) : (
          <div className="verticalContainer">
            <div id={"verticalPanel-1"} className="verticalPanel">
              <HeroVer isMobile={width < 600} />
            </div>
            <div id={"verticalPanel-2"} className="verticalPanel">
              <AboutUS isMobile={width < 600} />
            </div>
            <div id={"verticalPanel-3"} className="verticalPanel">
              <Service isMobile={width < 600} />
            </div>
            <div id={"verticalPanel-4"} className="verticalPanel">
              <Stories isMobile={width < 600} />
            </div>
            <div id={"verticalPanel-5"} className="verticalPanel">
              <Process isMobile={width < 600} />
            </div>
            <div id={"verticalPanel-6"} className="verticalPanel">
              <Contact isMobile={width < 600} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
export const query = graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
`;

export default IndexPage;
