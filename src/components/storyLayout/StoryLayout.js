import React, { useContext, useState, useRef } from 'react'
import Layout from '../layout/Layout'
import * as style from '../../styles/components/storyLayout.module.css'
import { graphql, navigate } from "gatsby"
import gsap from 'gsap'
import { DataContext } from '../Provider/Provider'
import RelatedCases from '../relatedCases/RelatedCases'
function StoryLayout({ pageContext, data }) {
    const ref = useRef(null)
    console.log('ref', ref.current)
    const [whichIndex, setWhichIndex] = useState('')
    const { setStory } = useContext(DataContext)
    function createMarkup(story) {
        return { __html: story };
    }
    const storyData = data?.allWpStories?.edges?.[0]?.node?.stories
    const handleClick = (id) => {
        navigate('/')
        gsap.to(window, {
            scrollTo: 700 * id,
            duration: .5,
        })

    }
    const shareIconsData = [
        {
            linkTitle: "instagram",
            icon: "/icons/insta.png",
            hoverIcon: "/icons/instaHv.png",
        },
    ]
    return (
        <Layout onNavClick={handleClick}>
            <div
                className={style.main}
            >
                <div className={style.bannerContainer}>
                    <img onClick={() => { navigate('/'); setStory(true) }}
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
                        {storyData.storyTitle}
                    </h1>
                    <center>
                        <div className={style.bannerImageContainer}>
                            <img className={style.bannerImage} src='/images/common/film.png' alt='film' />
                            <img className={style.playIcon} src='/images/home/playIcon.webp' alt='playIcon' />
                        </div>
                    </center>

                </div>
                <div className={style.body}>
                    <div className={style.story}>
                        <div ref={ref} dangerouslySetInnerHTML={createMarkup(storyData.story)} />

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
            </div>

        </Layout>

    )
}
export const query = graphql`
query ($slug: String) {
    allWpStories(filter:{ stories:{ slug: { eq : $slug} } }) {
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
                story
                storyTitle
                storyType
                team
                year
                slug
              }
            }
          }
        }
    }
`
export default StoryLayout