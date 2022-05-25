import React, { useRef } from "react";
import * as style from "../../styles/components/aboutUs.module.css";
import UseAboutMouseGesture from "./useAboutMouseGesture";
import useAboutUs from "./useAboutUs";

function AboutUS({ isMobile }) {
  const myRef = useRef();
  const { bind } = UseAboutMouseGesture("aboutCrossBg", myRef);
  const { aboutText } = useAboutUs();

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <div {...bind()} ref={myRef}>
      {isMobile ? (
        <div className={`${style.mblMain}  `}>
          <div className={`${style.mblBgCross}  `}>
            <img src="/images/about-us/mblCross.webp" />
          </div>
          <div className={`${style.mblBody} `}>
            <div className={style.mblTextContainer}>
              <p className={style.mblTitle}>About us</p>
              <p
                className={style.mblParagraph}
                dangerouslySetInnerHTML={createMarkup(aboutText)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={`${style.main} bgImageAbout `}>
            <div className="meinContainerAnimated">
              <div className={`${style.bgCross}   aboutCrossBg cube`}>
                <div className="first">
                  <img className="pImage" src="/images/about-us/cross.webp" />
                </div>
                <div className="second">
                  <img className="pImage" src="/images/about-us/cross.webp" />
                </div>
                <div className="third">
                  <img className="pImage" src="/images/about-us/cross.webp" />
                </div>
                <div className="fourth">
                  <img className="pImage" src="/images/about-us/cross.webp" />
                </div>
                <div className="fifth">
                  <img className="pImage" src="/images/about-us/cross.webp" />
                </div>
                <div className="sixth">
                  <img className="pImage" src="/images/about-us/cross.webp" />
                </div>
              </div>
            </div>
            <div
              style={{
                marginLeft: "-30px",
              }}
              className={`${style.body} aboutUsMainContent`}
            >
              <p className={style.title}>About us</p>
              <p
                className={style.paragraph}
                dangerouslySetInnerHTML={createMarkup(aboutText)}
              />
            </div>
          </div>
          <div className={style.bgBoxes}>
            <div className={style.boxesContainer}>
              <div className={style.containerRow1}>
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow2}>
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow3}>
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow4}>
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  style={{ opacity: "0" }}
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  style={{ opacity: "0" }}
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow5}>
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow6}>
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow5}>
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
              </div>
              <div className={style.containerRow6}>
                <img
                  className={`${style.firstBox} ${style.mdmBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  style={{ opacity: "0" }}
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  className={`${style.firstBox} ${style.lrgBox}`}
                  src="/images/services/box.webp"
                />
                <img
                  style={{ opacity: "0" }}
                  className={`${style.firstBox} ${style.smallBox}`}
                  src="/images/services/box.webp"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUS;
