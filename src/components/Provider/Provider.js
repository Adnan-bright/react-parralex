import React, { useState } from "react";
import "../../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const DataContext = React.createContext("");

const Provider = (props) => {
  const [story, setStory] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [previousRoute, setPreviousRoute] = useState("/");
  return (
    <DataContext.Provider
      value={{
        story,
        setStory,
        selectedType,
        setSelectedType,
        previousRoute,
        setPreviousRoute,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default ({ element }) => <Provider>{element}</Provider>;
