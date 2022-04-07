
import React, { useState } from "react";
import '../../styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export  const DataContext = React.createContext('')
const Provider = (props) => {
    const [story, setStory] = useState(false)
    return <DataContext.Provider value={{ story, setStory }} >{props.children}</DataContext.Provider>
};
export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);