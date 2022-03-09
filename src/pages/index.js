import React, { useRef, useEffect, useState } from "react";
import * as style from "../styles/index.module.css";
import HeroVer1 from "../components/heroVer1/HeroVer1";
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import useScrollOnDrag from "react-scroll-ondrag";
import HeroVer2 from "../components/heroVer2/HeroVer2";
import Layout from "../components/layout/Layout";
// import { Slider } from "../components/slider/Slider";
import { a } from "@react-spring/web";
import AboutUS from "../components/aboutUs/AboutUs";
import Service1 from "../components/service1/Service1";
import Stories1 from "../components/stories1/Stories1";
import Process from "../components/process/Process";
import Contact1 from "../components/contact/Contact1";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// markup
const IndexPage = () => {
  const ref = useRef(null);
  const [goto, setGoto] = useState(0)
  const [slideState, setSlideState] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)
  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);
  function scroll(e) {
    if (ref === null) return 0;

    e.wheelDelta > 0 ? ref.current.slickNext() : ref.current.slickPrev();
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setGoto(next)
  };

  const scrollRef = useHorizontalScroll();

  const runScroll =
    (scrollRef) =>
      ({ dx }) => {
        scrollRef.current.scrollLeft += dx * 20; // eslint-disable-line no-param-reassign
      };
  const { events } = useScrollOnDrag(scrollRef, {
    runScroll: runScroll && runScroll(scrollRef),
  });

  // The phone screen moves up vertically

  const items = [
    <HeroVer1 />,
    <AboutUS />,
    <Service1 />,
    <Stories1 />,
    <Contact1 />,
  ];
  useEffect(() => {

  }, [])

  const onClick = (num) => {
    ref.current.slickGoTo(num)
  }
  return (
    <Layout onClick={onClick}>
      {(value) => (<div
        style={{ width: "100vw", height: "100vh", backgroundColor: "black", overflow: "hidden" }}
      >
        <Slider ref={ref} {...settings}>
          <HeroVer1 newClick={onClick} />
          <AboutUS />
          <Service1 />
          <Stories1 />

          <Process />
          
          <Contact1 />
        </Slider>
      </div>)}
    </Layout>
  );
};

export default IndexPage;
