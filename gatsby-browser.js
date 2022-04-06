
import React, { useState } from "react";
import { Provider } from 'react-redux'
import './src/styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './src/config/Store';
export const wrapPageElement = ({ element, props }) => {
  return <Provider store={store}>
    <div>{element}</div>
  </Provider>
};