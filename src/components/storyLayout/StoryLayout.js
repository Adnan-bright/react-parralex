import React, { useContext, useState, useEffect, useRef } from 'react'
import Layout from '../layout/Layout'
import * as style from '../../styles/components/storyLayout.module.css'
import { graphql, navigate } from "gatsby"
import gsap from 'gsap'
import { DataContext } from '../Provider/Provider'
import RelatedCases from '../relatedCases/RelatedCases'
import ContactBanner from '../contactBanner/ContactBanner'
import Footer from '../footer/Footer'
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import UseWindowDimension from '../hooks/useWindowDimension'

function StoryLayout({ pageContext, data }) {

    const { width } = UseWindowDimension()

    const ref = useRef(null)
    const [whichIndex, setWhichIndex] = useState('')
    const { setStory, previousRoute } = useContext(DataContext)
    function createMarkup(story) {
        return { __html: story };
    }
    const storyData = data?.allWpStories?.edges?.[0]?.node?.stories
    const content = data?.allWpStories?.edges?.[0]?.node?.content

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
        <Layout isMobile={width >= 800 ? false : true} isVertical={true} onNavClick={handleClick}>
            <div
                className={style.main}
            >
                <div className={style.bannerContainer}>
                    <img onClick={() => { navigate(previousRoute); setStory(true) }}
                        className={style.leftArrow} src='/icons/leftArrow.png'
                        alt='arrow' />
                    <div className={style.bannerHeader}>
                        <div className={style.childHeader}>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>Work</p>
                                <p className={style.headerValue}>{storyData.storyType}</p>
                            </div>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>client</p>
                                <p className={style.headerValue}>{storyData.client}</p>
                            </div>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>team</p>
                                <p className={style.headerValue}>{storyData.team}</p>
                            </div>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>year</p>
                                <p className={style.headerValue}>{storyData.year}</p>
                            </div>
                        </div>
                    </div>
                    <h1 className={style.bannerHeading}>
                        {/* {storyData.storyTitle} */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>


                </div>
                <div className={style.body}>

                    <center>
                        <div className={style.bannerImageContainer}>
                            <img className={style.bannerImage} src='/images/common/film.png' alt='film' />
                            <img className={style.playIcon} src='/images/home/playIcon.webp' alt='playIcon' />
                        </div>
                    </center>


                    <div ref={ref} className={`${style.story} storyLayout`}>
                        <div dangerouslySetInnerHTML={createMarkup(content)} />

                    </div>
                    <div className={style.shareContainer}>
                        <p className={style.shareText}>SHARE</p>
                        <div className={style.tabs}>
                            <a className={style.tab1}>
                            </a>
                            <a className={style.tab2}>
                            </a>
                            <a className={style.tab3}>
                            </a>
                            <a className={style.tab4}>
                            </a>
                        </div>
                    </div>
                    <div className={style.casesContainer}>
                        <h1 className={style.relatedCsHd}>Related cases</h1>
                        <div className={style.casesCompContainer}>
                            <RelatedCases />
                        </div>
                    </div>
                    <div className={style.signUpContainer}>
                        <h1 className={style.signUpHeading}>sign up for new stories</h1>
                        <div className={style.inputContainer}>
                            <input className={style.signUpInput}
                                placeholder='Email'
                                type={'text'} />
                            <div className={style.button}>sign up</div>
                        </div>
                    </div>
                </div>
                <div className={style.ContactBannerContainer}>
                    <ContactBanner />
                </div>
                <div className={style.footerContainer}>
                    <Footer />
                </div>
            </div>

        </Layout>

    )
}
export const query = graphql`
                    query ($slug: String) {
                        allWpStories(filter:{stories:{slug: {eq : $slug} } }) {
                        edges {
                        node {
                        stories {
                        client
                coverImage {
                        mediaItemUrl
                    }
                    coverImageLink {
                        url
                    }
                    description
                    storyTitle
                    storyType
                    team
                    year
                    slug
              }
                    content
              
            }
          }
        }
    }
                    `
export default StoryLayout