import { useStaticQuery, graphql } from "gatsby";

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
                video {
                  mediaItemUrl
                }
                videoTitle
                titleText {
                  firstLine
                  secondLine
                  thirdLine
                }
                mobileBackgroundImage {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `
  );
  const HeroData = data?.allWpHeroSection?.edges?.[0]?.node?.heroSection;
  const {
    videoTitle,
    video,
    backgroundVideo,
    titleText,
    mobileBackgroundImage
  } = HeroData;

  const coverVideo = video?.mediaItemUrl;
  const bgVideo =  backgroundVideo?.mediaItemUrl;
  const mblBgImg = mobileBackgroundImage?.mediaItemUrl;
  return { videoTitle, coverVideo, bgVideo, titleText, mblBgImg };
}

export default UseHeroVer;
