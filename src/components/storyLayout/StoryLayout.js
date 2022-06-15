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
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import Slider from "react-slick";

function StoryLayout({ data }) {
  const [video, setVideo] = useState(false);
  const [fbIcon, setFbIcon] = useState("/icons/fb.png");
  const [twIcon, setTwIcon] = useState("/icons/twitter.png");
  const [lnIcon, setLnIcon] = useState("/icons/linkedIn.png");
  const [sliderImagesData, setSliderImagesData] = useState([]);
  var url = typeof window !== "undefined" ? window.location.href : "";
  const { width } = UseWindowDimension();
  const ref = useRef(null);
  const myRef = useRef(null);
  // Find All indexes of Occurrences of the Letter in a string
  const findAllIndexesOf = (str, letter) => {
    var indexes = [],
      i = -1;
    while ((i = str?.indexOf(letter, i + 1)) !== -1) {
      indexes.push(i);
    }
    return indexes;
  };
  // remove full tage which class is remove
  const getFullData = (str) => {
    const fullIndexes = [];
    const fullData = [];

    const allIndexes = findAllIndexesOf(str, "wp-slider-images-block");
    allIndexes.map((item, index) => {
      const quotesStrIndex = str.slice(0, item).lastIndexOf("<div");
      fullIndexes.push(quotesStrIndex);
    });
    fullIndexes.push(str.length);
    fullIndexes.map((item, index) => {
      fullData.push(str.slice(index === 0 ? 0 : fullIndexes[index - 1], item));
      if (index !== fullIndexes.length - 1) {
        fullData.push("slider");
      }
    });
    return fullData;
  };
  const slidesData = [];
  useEffect(() => {
    const triggers = ScrollTrigger.getAll();
    if (triggers) {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    }
    const sliderItems = [];
    const elem = ref.current;
    if (elem) {
      const sliderImages = elem.querySelectorAll(".wp-slider-images-block img");
      sliderImages.forEach((image) => {
        if (image?.src?.slice(0, 4) !== "data") {
          sliderItems.push({
            src: image.currentSrc,
          });
        }
      });
      slidesData.push(sliderImages);
      console.log("sliderItems[0].src", sliderItems[0]?.src);
      console.log("sliderItems[0].currentSrc", sliderItems[0]?.currentSrc);
      console.log("sliderItems", sliderItems);
      const str = data?.allWpStories?.edges?.[0]?.node?.content;
      const content = getFullData(str);
      content.map((item, index) => {
        if (item === "slider") {
          content.splice(index, 1, sliderItems);
        }
      });
      setSliderImagesData(content);
    }
  }, [ref.current]);

  if (slidesData[0]?.src?.slice(0, 4) !== "http" && slidesData?.length > 0) {
    window.location.reload();
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dotsClass: "button__bar2",
    arrows: false,
  };
  const { setStory, previousRoute } = useContext(DataContext);
  function createMarkup(story) {
    return { __html: story };
  }
  const storyData = data?.allWpStories?.edges?.[0]?.node?.stories;

  const videoUrl = storyData?.video?.mediaItemUrl;

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
            {sliderImagesData.map((item, index) => {
              return (
                <div key={index}>
                  {typeof item === "string" ? (
                    <div
                      className="mn-content"
                      dangerouslySetInnerHTML={createMarkup(item)}
                    />
                  ) : (
                    <div className={style.sliderContainer}>
                      <Slider {...settings}>
                        {item?.map((elem, index) => (
                          <div key={index}>
                            <img src={elem.src} alt="slider" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className={style.shareContainer}>
            <p className={style.shareText}>SHARE</p>
            <div className={style.tabs}>
              {/* <a className={style.tab1}></a> */}
              <FacebookShareButton url={url}>
                <img
                  onMouseEnter={() => setFbIcon("/icons/fbHv.png")}
                  onMouseLeave={() => setFbIcon("/icons/fb.png")}
                  src={fbIcon}
                  className={style.tab}
                />
              </FacebookShareButton>
              <TwitterShareButton url={url}>
                <img
                  onMouseEnter={() => setTwIcon("/icons/twitterHv.png")}
                  onMouseLeave={() => setTwIcon("/icons/twitter.png")}
                  src={twIcon}
                  className={style.tab}
                />
              </TwitterShareButton>
              <LinkedinShareButton url={url}>
                <img
                  onMouseEnter={() => setLnIcon("/icons/linledinHv.png")}
                  onMouseLeave={() => setLnIcon("/icons/linkedIn.png")}
                  src={lnIcon}
                  className={style.tab}
                />
              </LinkedinShareButton>
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
