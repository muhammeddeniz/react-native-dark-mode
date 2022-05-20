import React from "react";
import useTheme from "../hooks/useTheme";

const MainWrapper = (WrappedComponent, styles) => {
  return (...props) => {
    const currentTheme = useTheme();
    const style = styles(currentTheme);

    return <WrappedComponent styles={style} {...props} />;
  };
};

export default MainWrapper;
