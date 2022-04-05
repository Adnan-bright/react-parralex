import React from 'react'
import Layout from '../layout/Layout'
import * as style from '../../styles/components/storyLayout.module.css'
import { graphql } from "gatsby"

function StoryLayout( {pageContext, data}) {
    function createMarkup(story) {
        return {__html: story};
      }
      const storyData = data?.allWpStories?.edges?.[0]?.node?.stories
    console.log('Props', storyData)

    return (
        <Layout>
            <div
                className={style.main}
            >
                <div className={style.bannerContainer}>
                    <div className={style.bannerHeader}>
                        <div className={style.childHeader}>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>Work</p>
                                <p className={style.headerValue}>Film</p>
                            </div>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>client</p>
                                <p className={style.headerValue}>Lorem ipsum</p>
                            </div>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>team</p>
                                <p className={style.headerValue}>Mag-raw</p>
                            </div>
                            <div className={style.headerBannerItem}>
                                <p className={style.headerTitle}>year</p>
                                <p className={style.headerValue}>2021</p>
                            </div>
                        </div>
                    </div>
                    <h1 className={style.bannerHeading}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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