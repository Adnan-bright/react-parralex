import React from 'react'
import Layout from '../layout/Layout'
import * as style from '../../styles/components/storyLayout.module.css'
import { graphql, navigate } from "gatsby"
import { useDispatch } from 'react-redux'
import { shareData } from '../../store/actions/action'
import gsap from 'gsap'
function StoryLayout({ pageContext, data }) {
    const dispatch = useDispatch();

    function createMarkup(story) {
        return { __html: story };
    }
    const storyData = data?.allWpStories?.edges?.[0]?.node?.stories
    // const handleClick =  (id) => {
    //      navigate('/')
    //     gsap.to(window, {
    //         scrollTo: 700 * id,
    //         duration: .5,
    //     })

    // }
    return (
        <Layout >
            <div
                className={style.main}
            >
                <div className={style.bannerContainer}>
                    <img onClick={() => { dispatch(shareData(true)); navigate('/') }}
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
                        <div dangerouslySetInnerHTML={createMarkup(storyData.story)} />

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