import React, { useRef, useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import * as style from "../../styles/components/layout.module.css";
import Header from "../header/Header";
import { Parallax } from "@react-spring/parallax";
import { useWheel } from "@use-gesture/react";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
export default function Layout({ children, onClick }) {
  const [isWheel, setIsWheel] = useState(0);
  const [oldIsWheel, setOldIsWheel] = useState(0);
  const [click, setClick] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref?.current?.scrollTo(isWheel);

    // console.log("num", ref?.current.offset);
  }, [isWheel]);


  return (
    <div className={style.main}>
      <div className={style.headerContainer}>
        <div className={style.header}>
          <Header navClick={onClick} />
        </div>
      </div>
 
        {children(click)}
    </div>
  );
}
