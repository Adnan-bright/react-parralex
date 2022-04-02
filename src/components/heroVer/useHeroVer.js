import { useStaticQuery, graphql } from "gatsby"

function UseHeroVer() {
  const data = useStaticQuery(
    graphql`
          query HeroData {
          allWpHeroSection {
            edges {
              node {
                heroSection {
                  backgroundVideo {
                    mediaItemUrl
                  }
                  backgroundVideoLink {
                    url
                  }
                  video {
                    mediaItemUrl
                  }
                  videoLink {
                    url
                  }
                  videoTitle
                }
              }
            }
              }
          }
        `
  )
  const HeroData = data?.allWpHeroSection?.edges?.[0]?.node?.heroSection

  const { videoTitle, video, videoLink, backgroundVideoLink, backgroundVideo } = HeroData

  const coverVideo = videoLink ? videoLink.url : video?.mediaItemUrl
  const bgVideo = backgroundVideoLink ? backgroundVideoLink.url : backgroundVideo?.mediaItemUrl
  return { videoTitle, coverVideo, bgVideo }
}

export default UseHeroVer