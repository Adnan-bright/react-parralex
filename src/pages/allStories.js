import gsap from "gsap";
import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import StoriesViewAll from "../components/storiesViewAll/StoriesViewAll";
import UseWindowDimension from "../hooks/useWindowDimension";
import { navigate } from "gatsby";
import { ScrollTrigger } from "gsap/all";

function AllStories() {
  
  useEffect(() => {
    const triggers = ScrollTrigger.getAll();
    if (triggers) {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    }
  }, []);

  const { width } = UseWindowDimension();

  const handleClick = (id) => {
    const value = id * 700;
    if (value) {
      navigate("/");
      gsap.to(window, {
        scrollTo: value,
        duration: 0.5,
      });
    } else {
      navigate("/");
    }
  };

  return (
    <Layout
      isMobile={width >= 800 ? false : true}
      isVertical={true}
      onNavClick={handleClick}
    >
      <div>
        <StoriesViewAll />
      </div>
    </Layout>
  );
}

export default AllStories;
