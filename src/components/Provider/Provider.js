
import React, { useState, useEffect } from "react";
import '../../styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { useBeforeunload as BeforeUnload } from "react-beforeunload";
export  const DataContext = React.createContext('')

const Provider = (props) => {


    // BeforeUnload
    // const path = window.location.pathname
    // useEffect(() => {
    //   const path = window.location.pathname
    //   console.log('path', path)
    //    if (path !== '/') {
    //     gsap.killTweensOf("*")
    //    }

    // }, [])
    
    const [story, setStory] = useState(false)
    const [selectedType, setSelectedType] = useState('all')
    const [previousRoute, setPreviousRoute] = useState('/')
    return <DataContext.Provider value={{ story, setStory, selectedType, setSelectedType, 
        previousRoute, setPreviousRoute }} >{props.children}</DataContext.Provider>
};
export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);