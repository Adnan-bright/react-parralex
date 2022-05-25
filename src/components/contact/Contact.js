import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as style from "../../styles/components/contact.module.css";
import ReviewContainer from "../reviewContainer/ReviewContainer";
import UseContactMouseGesture from "./useContactMouseGesture";
import UseContact from "./useContact";

function Contact({ id, isMobile }) {
  const {
    socialData,
    values,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPhoneChange,
    onMessageChange,
    onSubmit,
    error,
    status,
    className,
    loading,
  } = UseContact();
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1]?.focus();
      event.preventDefault();
    }
  };

  const [whichIndex, setWhichIndex] = useState("");
  const myRef = useRef();
  const data = [
    {
      className: "leftMid",
      xValue: -90,
      yValue: -20,
      speedValue: 10,
    },
    {
      className: "leftBtm",
      xValue: 90,
      yValue: -20,
      speedValue: 4,
    },
    {
      className: "leftLarge",
      xValue: -100,
      yValue: -20,
      speedValue: 11,
    },
    {
      className: "leftSmall",
      xValue: 90,
      yValue: -10,
      speedValue: 5,
    },
    {
      className: "rightBox",
      xValue: 40,
      yValue: 20,
      speedValue: 8,
    },
    {
      className: "right2ndBtm",
      xValue: -20,
      yValue: -10,
      speedValue: 7,
    },

    {
      className: "rightBtm",
      xValue: 190,
      yValue: 30,
      speedValue: 10,
    },

    {
      className: "ratingBox",
      xValue: 90,
      yValue: 60,
      speedValue: 10,
    },
  ];

  const { bind } = UseContactMouseGesture(data, myRef);
  const classes = [
    {
      class: "first",
    },
  ];
  return (
    <div ref={myRef} {...bind()}>
      <div
        style={{
          backgroundColor:
            status.status === "success"
              ? "rgba(0, 128, 0, 0.696)"
              : "rgba(255, 0, 0, 0.518)",
        }}
        className={className}
      >
        <p>{status.message}</p>
      </div>
      {isMobile ? (
        <div className={style.mblMain}>
     
          <div className={style.mblBody}>
          <div
            style={{
              backgroundColor:
                status.status === "success"
                  ? "rgba(0, 128, 0, 0.696)"
                  : "rgba(255, 0, 0, 0.518)",
            }}
            className={className}
          >
            <p>{status.message}</p>
          </div>
            <img
              className={style.leftBgImage}
              src="/images/contact/mblRightBg.png"
            />
            <img
              className={style.rightBgImage}
              src="/images/contact/mblLeftBg.png"
            />
            <div className={style.textContainer}>
              <h3 className={style.mblMainHeading}>CONTACT US</h3>
            </div>
            <center>
              <p className={style.mblMainDesc}>
                Want to create something unique? Let’s chat!
              </p>
            </center>
            <div className={style.mblFormContainer}>
              <form>
                <div className={style.mblTopRow}>
                  <input
                    onKeyDown={handleEnter}
                    onChange={onFirstNameChange}
                    type={"text"}
                    value={values.firstName}
                    placeholder="First name"
                  />
                  <input
                    onChange={onLastNameChange}
                    onKeyDown={handleEnter}
                    type={"text"}
                    value={values.lastName}
                    placeholder="Last name"
                  />
                  <input
                    onChange={onEmailChange}
                    onKeyDown={handleEnter}
                    value={values.email}
                    type={"text"}
                    placeholder="Email"
                  />
                  <input
                    onChange={onPhoneChange}
                    onKeyDown={handleEnter}
                    value={values.phone}
                    type={"number"}
                    placeholder="Phone"
                  />
                  <input
                    onChange={onMessageChange}
                    onKeyDown={handleEnter}
                    value={values.message}
                    className={style.mblMessageTxt}
                    type={"text"}
                    placeholder="Message"
                  />
                </div>
              </form>
              <center>
                <div className={style.errCont}>
                  <div className={style.errorMbl}>{error.message}</div>
                </div>
                <div onClick={onSubmit} className={style.mblBtn}>
                  {loading ? <div className="loader"></div> : "submit"}
                </div>
              </center>
            </div>
            <div className={style.singleBoxContainer}>
              <ReviewContainer />
            </div>
            <img
              className={style.btmLeftBgImg}
              src="/images/contact/btmLeftBg.webp"
            />
            <img
              className={style.btmRightBgImg}
              src="/images/contact/btnRightBg.webp"
            />
            <div className={style.mblFolloeContainer}>
              <p className={style.mblFollow}>follow us</p>
              <div className={style.mblIconsContainer}>
                {socialData?.map((item, index) => {
                  return (
                    <a key={index} href={item.link} target="_blank">
                      <img className={style.mblSocialIcon} src={item.icon} />
                    </a>
                  );
                })}
              </div>
              <p className={style.copyRight}>
                © 2022 MAG-RAW Creations, LLC all rights reserved
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${style.body} `}>
          <div>
            <div className="meinContainerAnimated">
              <div className="cube leftMid">
                {classes.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={`${style.leftMidBg} ${item.class}`}
                    >
                      <img
                        className={`${style.bgImage} `}
                        src="/images/contact/leftMid.png"
                        alt="leftMid"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="meinContainerAnimated">
              <div className="cube leftBtm">
                {classes.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={`${style.leftBtmBg} ${item.class}`}
                    >
                      <img
                        className={`${style.bgImage} `}
                        src="/images/contact/leftBtm.png"
                        alt="leftBtm"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="meinContainerAnimated">
              <div className="cube leftLarge">
                {classes.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={`${style.bgContainerLeftLarge} ${item.class}`}
                    >
                      <img
                        className={`${style.bgImage} `}
                        alt="leftLarge"
                        src="/images/contact/leftLarge.png"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="meinContainerAnimated">
              <div className="cube leftSmall">
                {classes.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={`${style.bgContainerLeftSmall} ${item.class}`}
                    >
                      <img
                        className={`${style.bgImage} `}
                        src="/images/contact/leftSmall.png"
                        alt="leftSmall"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className={style.rightBoxContainer}>
              <div className="meinContainerAnimated">
                <div className="cube rightBox">
                  {classes.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        className={`${style.bgContainerRightBox} ${item.class}`}
                      >
                        <img
                          alt="rightBox"
                          className={`${style.bgImage} `}
                          src="/images/contact/rightBox.webp"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={style.right2ndBtmContainer}>
              <div className="meinContainerAnimated">
                <div className="cube right2ndBtm">
                  {classes.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        className={`${style.right2ndBtmBg} ${item.class}`}
                      >
                        <img
                          className={`${style.bgImage} `}
                          alt="right2ndBtm"
                          src="/images/contact/right2ndBtm.webp"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={style.right2ndBtmContainer}>
              <div className="meinContainerAnimated">
                <div className="cube rightBtm">
                  {classes.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        className={`${style.rightBtmBg} ${item.class}`}
                      >
                        <img
                          className={`${style.bgImage} `}
                          src="/images/contact/rightBtm.webp"
                          alt="rightBtm"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div id={id} className={style.main}>
            <div className={style.reviewContainer}>
              <div className="ratingBox">
                <ReviewContainer />
              </div>
            </div>
            <div className={style.midContainer}>
              <h1 className={style.heading}>CONTACT US</h1>
              <p className={style.contactDesc}>
                Want to create something unique? Let’s chat!
              </p>
              <div className={style.formContainer}>
                <form>
                  <div className={style.topRow}>
                    <input
                      onChange={onFirstNameChange}
                      value={values.firstName}
                      onKeyDown={handleEnter}
                      type={"text"}
                      placeholder="First name"
                    />
                    <input
                      onChange={onLastNameChange}
                      value={values.lastName}
                      onKeyDown={handleEnter}
                      type={"text"}
                      placeholder="Last name"
                    />
                  </div>
                  <div className={style.midRow}>
                    <input
                      onChange={onEmailChange}
                      value={values.email}
                      onKeyDown={handleEnter}
                      type={"email"}
                      placeholder="Email"
                    />
                    <input
                      onChange={onPhoneChange}
                      value={values.phone}
                      onKeyDown={handleEnter}
                      type={"number"}
                      placeholder="Phone"
                    />
                  </div>
                  <div className={style.lowerRow}>
                    <input
                      onChange={onMessageChange}
                      value={values.message}
                      onKeyDown={handleEnter}
                      type={"text"}
                      placeholder="Message"
                    />
                  </div>
                </form>
                <div className={style.btnContainer}>
                  {" "}
                  <div className={style.error}>{error.message}</div>
                  <div
                    style={{
                      pointerEvents: loading && "none",
                    }}
                    onClick={onSubmit}
                    className={style.btn}
                  >
                    {loading ? <div className="loader"></div> : <p>submit</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.copyrightContainer}>
            <p className={style.copyRight}>
              © 2022 MAG-RAW Creations, LLC all rights reserved
            </p>
          </div>

          <div className={style.followContainer}>
            <p className={style.follow}>FOLLOW</p>
            <br />
            <div className={style.tabs}>
              {socialData.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    key={index}
                    onMouseLeave={() => setWhichIndex("")}
                    onMouseEnter={() => setWhichIndex(item.linkTitle)}
                    style={{
                      backgroundImage:
                        whichIndex === item.linkTitle
                          ? `url(${item.hoverIcon})`
                          : `url(${item.icon})`,
                      marginTop:
                        index === 2 ? "8px" : index === 5 ? "8px" : "0px",
                    }}
                    className={style.tab}
                  ></a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
