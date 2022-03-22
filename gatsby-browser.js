
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import './src/styles/global.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider scrollAxis="vertical">{element}</ParallaxProvider>
};