import React from "react";
import * as style from '../styles/index.module.css'
import HeroVer1 from "../components/heroVer1/HeroVer1"
import Layout from "../components/layout/Layout";
import AboutUS from "../components/aboutUs/AboutUs";
import Service1 from "../components/service1/Service1";
import Stories1 from "../components/stories1/Stories1";
import Contact1 from "../components/contact/Contact1";


// markup
const IndexPage = () => {

  const items = [
    <HeroVer1 />,
    <AboutUS />,
    <Service1 />,
    <Stories1 />,
    // <Process />,
    <Contact1 />
  ]

  return (
    <Layout>
      <div className={style.sMain}
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
