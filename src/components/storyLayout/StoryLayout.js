import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import * as style from "../../styles/components/storyLayout.module.css";
import { graphql, navigate } from "gatsby";
import gsap from "gsap";
import { DataContext } from "../Provider/Provider";
import RelatedCases from "../relatedCases/RelatedCases";
import ContactBanner from "../contactBanner/ContactBanner";
import Footer from "../footer/Footer";
import UseWindowDimension from "../../hooks/useWindowDimension";
import { ScrollTrigger } from "gsap/all";
import ReactPlayer from "react-player";
import VideoCloseIcon from "../../../static/icons/videoClose.webp";

function StoryLayout({ data }) {
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const triggers = ScrollTrigger.getAll();
    if (triggers) {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    }
  }, []);

  const { width } = UseWindowDimension();
  const ref = useRef(null);
  const myRef = useRef(null);
  const { setStory, previousRoute } = useContext(DataContext);
  function createMarkup(story) {
    return { __html: story };
  }
  const storyData = data?.allWpStories?.edges?.[0]?.node?.stories;
  const content = data?.allWpStories?.edges?.[0]?.node?.content;
  const videoUrl = storyData?.video?.mediaItemUrl;
  console.log("data", storyData);

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
      <div className={style.main}>
        <div className={!video ? style.videoBodyHide : style.videoBody}>
          <div
            onContextMenu={(e) => e.preventDefault()}
            className={style.videoBox}
          >
            <img
              onClick={() => setVideo(false)}
              className={style.videoCloseIcon}
              src={VideoCloseIcon}
              alt="VideoCloseIcon"
            />
            <ReactPlayer
              ref={myRef}
              playing={video}
              loop={false}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", //<- this is the important bit
                  },
                },
              }}
              height="100%"
              width={"100%"}
              className={style.video}
              url={videoUrl}
              title={storyData?.storyTitle}
              controls={true}
            />
          </div>
        </div>
        <div className={style.bannerContainer}>
          <img
            onClick={() => {
              navigate(previousRoute);
              setStory(true);
            }}
            className={style.leftArrow}
            src="/icons/leftArrow.png"
            alt="arrow"
          />
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
            {storyData.description}
          </h1>
        </div>
        <div className={style.body}>
          <center>
            <div className={style.bannerImageContainer}>
              {storyData?.videCoverImage?.mediaItemUrl && (
                <img
                  className={style.bannerImage}
                  src={storyData?.videCoverImage?.mediaItemUrl}
                  alt="film"
                />
              )}
              {videoUrl && (
                <img
                  onClick={() => setVideo(true)}
                  className={style.playIcon}
                  src="/images/home/playIcon.webp"
                  alt="playIcon"
                />
              )}
            </div>
          </center>

          <div ref={ref} className={`${style.story} storyLayout`}>
            <div dangerouslySetInnerHTML={createMarkup(content)} />
          </div>
          <div className={style.shareContainer}>
            <p className={style.shareText}>SHARE</p>
            <div className={style.tabs}>
              <a className={style.tab1}></a>
              <a className={style.tab2}></a>
              <a className={style.tab3}></a>
              <a className={style.tab4}></a>
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
              <input
                className={style.signUpInput}
                placeholder="Email"
                type={"text"}
              />
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
  );
}
export const query = graphql`
  query ($slug: String) {
    allWpStories(filter: { stories: { slug: { eq: $slug } } }) {
      edges {
        node {
          stories {
            client
            coverImage {
              mediaItemUrl
            }
            description
            storyTitle
            storyType
            team
            year
            slug
            readTime
            sortKey
            video {
              mediaItemUrl
            }
            videCoverImage {
              mediaItemUrl
            }
          }
          content
          date
          modified
        }
      }
    }
  }
`;
export default StoryLayout;
