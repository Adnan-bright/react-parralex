import gsap from 'gsap';
import React from 'react'
import Layout from '../components/layout/Layout';
import StoriesViewAll from "../components/storiesViewAll/StoriesViewAll";
import UseWindowDimension from '../components/hooks/useWindowDimension';
import { navigate } from 'gatsby';
function AllStories() {

  const { width } = UseWindowDimension()

  const handleClick = (id) => {
    const value = id * 700
    if (value) {
      navigate('/')
      gsap.to(window, {
        scrollTo: value,
        duration: .5,
      })
    } else {
      navigate('/')
    }

  }
  return (
    <Layout isMobile={width >= 800 ? false : true}  isVertical={true} onNavClick={handleClick}>
      <div><StoriesViewAll /></div>
    </Layout>
  )
}

export default AllStories