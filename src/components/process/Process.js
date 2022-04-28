import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import * as style from "../../styles/components/process.module.css";
import UseProcess from "./useProcess";
import UseProcessMouseGesture from "./useProcessMouseGesture";

function Process({ isMobile }) {
  const [hover, setHover] = useState("");
  gsap.registerPlugin(ScrollTrigger);
  const items = [
    {
      title: "Expansion",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
      bgImage: "/images/process/5.webp",
      icon: "/images/process/icon5.webp",
    },
    {
      title: "Planning",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
      bgImage: "/images/process/2.webp",
      icon: "/images/process/icon2.webp",
    },
    {
      title: "Deployment",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
      bgImage: "/images/process/4.webp",
      icon: "/images/process/icon4.webp",
    },
    {
      title: "Ideation",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
      bgImage: "/images/process/1.webp",
      icon: "/images/process/icon1.webp",
    },
    {
      title: "Creation",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.",
      bgImage: "/images/process/planning.webp",
      icon: "/images/process/icon3.webp",
    },
  ];
  const myRef = useRef();
  const data = [
    {
      className: "close1",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close2",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close3",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close4",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close5",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close6",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close7",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close8",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close9",
      xValue: 90,
      yValue: -20,
      speedValue: 2,
    },
    {
      className: "close10",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close11",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close12",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close13",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close14",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close15",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close16",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close17",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close18",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close19",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close20",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
    {
      className: "close21",
      xValue: 120,
      yValue: -40,
      speedValue: 2,
    },
  ];

  const { bind } = UseProcessMouseGesture(data, myRef);
  const { newData } = UseProcess();
  const mblNewData = Object.values(newData);
  mblNewData.sort((a, b) => a?.sortNumber - b?.sortNumber);
  items?.reverse();

  return (
    <div ref={myRef} {...bind()}>
      {isMobile ? (
        <div className={style.mblMain}>
          <div className={style.body}>
            <h1 className={style.mblHeading}>OUR PROCESS</h1>
            {mblNewData.map((item, index) => {
              return (
                <center key={index}>
                  <div
                    className={style.mblMainContainer}
                    style={{
                      backgroundImage: `url(${items[index]?.bgImage})`,
                    }}
                  >
                    <img
                      className={style.mblIcon}
                      src={item?.icon?.mediaItemUrl}
                    />
                    <p className={style.mblTitle}>{item?.title}</p>
                    <p className={style.mblDescription}>{item?.description}</p>
                  </div>
                </center>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={`${style.main} `}>
          <h1 className={style.heading}>OUR PROCESS</h1>
          <div className={style.MainContainer}>
            <div className={style.closeIconContainer}>
              <div className={style.closeRow1}>
                <div className={`${style.closeIcon} `}>
                  <p className={`${style.close} close1`} />
                </div>
              </div>
              <div className={style.closeRow2}>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close2`} />
                </div>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close3`} />
                </div>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close4`} />
                </div>
              </div>
              <div className={style.closeRow3}>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close5`} />
                </div>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close6`} />
                </div>
              </div>
              <div className={style.closeRow4}>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close7`} />
                </div>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close8`} />
                </div>
              </div>
              <div className={style.closeRow5}>
                <div className={style.closeIcon}>
                  <p className={`${style.close} close9`} />
                </div>
              </div>
            </div>
            <div className={style.centerContainer}>
              <div className={style.rowsContainer}>
                <div className={`${style.topRow} processTopRow`}>
                  <div
                    className={
                      hover === ""
                        ? `${style.imageContainer5}
                                             processContainer1`
                        : hover === "expansion"
                        ? `${style.imageContainer5Active} `
                        : `${style.imageContainer5Blur} `
                    }
                  >
                    <div
                      onMouseEnter={() => setHover("expansion")}
                      onMouseLeave={() => setHover("")}
                      className={`${style.bgContainer} `}
                    >
                      <div
                        className={`${style.dataContainer} 
                                                processDataContainer`}
                      >
                        <img
                          className={style.imgItem}
                          src={newData?.fifthStep?.icon?.mediaItemUrl}
                        />
                        <p className={style.imageText}>
                          {newData?.fifthStep?.title}
                        </p>
                        <p
                          className={
                            hover === "expansion"
                              ? style.boxDetails
                              : style.boxDetailsHide
                          }
                        >
                          {newData?.fifthStep?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style.midRow} processMidRow`}>
                  <div
                    className={
                      hover === ""
                        ? `${style.imageContainer3} `
                        : hover === "planning"
                        ? style.imageContainer3Active
                        : style.imageContainer3Blur
                    }
                  >
                    <div
                      onMouseEnter={() => setHover("planning")}
                      onMouseLeave={() => setHover("")}
                      className={style.bgContainer}
                    >
                      <div className={style.dataContainer}>
                        <img
                          className={style.imgItem}
                          src={newData?.secondStep?.icon?.mediaItemUrl}
                        />
                        <p className={style.imageText}>
                          {newData?.secondStep?.title}
                        </p>
                        <p
                          className={
                            hover === "planning"
                              ? style.boxDetails
                              : style.boxDetailsHide
                          }
                        >
                          {newData?.secondStep?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      hover === ""
                        ? style.imageContainer4
                        : hover === "deployment"
                        ? style.imageContainer4Active
                        : style.imageContainer4Blur
                    }
                  >
                    <div
                      onMouseEnter={() => setHover("deployment")}
                      onMouseLeave={() => setHover("")}
                      className={style.bgContainer}
                    >
                      <div className={style.dataContainer}>
                        <img
                          className={style.imgItem}
                          src={newData?.fourthStep?.icon?.mediaItemUrl}
                        />
                        <p className={style.imageText}>
                          {newData?.fourthStep?.title}
                        </p>
                        <p
                          className={
                            hover === "deployment"
                              ? style.boxDetails
                              : style.boxDetailsHide
                          }
                        >
                          {newData?.fourthStep?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style.bottomRow} processBtmRow`}>
                  <div
                    className={
                      hover === ""
                        ? style.imageContainer1
                        : hover === "ideation"
                        ? style.imageContainer1Active
                        : style.imageContainer1Blur
                    }
                  >
                    <div
                      onMouseEnter={() => setHover("ideation")}
                      onMouseLeave={() => setHover("")}
                      className={style.bgContainer}
                    >
                      <div className={style.dataContainer}>
                        <img
                          className={style.imgItem}
                          src={newData?.firstStep?.icon?.mediaItemUrl}
                        />
                        <p className={style.imageText}>
                          {newData?.firstStep?.title}
                        </p>
                        <p
                          className={
                            hover === "ideation"
                              ? style.boxDetails
                              : style.boxDetailsHide
                          }
                        >
                          {newData?.firstStep?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      hover === ""
                        ? style.imageContainer2
                        : hover === "creation"
                        ? style.imageContainer2Active
                        : style.imageContainer2Blur
                    }
                  >
                    <div
                      onMouseEnter={() => setHover("creation")}
                      onMouseLeave={() => setHover("")}
                      className={style.bgContainer}
                    >
                      <div className={style.dataContainer}>
                        <img
                          className={style.imgItem}
                          src={newData?.thirdStep?.icon?.mediaItemUrl}
                        />
                        <p className={style.imageText}>
                          {newData?.thirdStep?.title}
                        </p>
                        <p
                          className={
                            hover === "creation"
                              ? style.boxDetails
                              : style.boxDetailsHide
                          }
                        >
                          {newData?.thirdStep?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.closeIconContainerRight}>
              <div className={style.rightCloseRow1}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close10`} />
                </div>
              </div>
              <div className={style.rightCloseRow2}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close11`} />
                </div>
              </div>
              <div className={style.rightCloseRow3}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close12`} />
                </div>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close13`} />
                </div>
              </div>
              <div className={style.rightCloseRow4}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close14`} />
                </div>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close15`} />
                </div>
              </div>
              <div className={style.rightCloseRow5}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close16`} />
                </div>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close17`} />
                </div>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close18`} />
                </div>
              </div>
              <div className={style.rightCloseRow6}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close19`} />
                </div>
              </div>
              <div className={style.rightCloseRow7}>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close20`} />
                </div>
                <div className={style.rightCloseIcon}>
                  <p className={`${style.rightClose} close21`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Process;
