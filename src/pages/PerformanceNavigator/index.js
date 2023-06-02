import React from "react";
import { Link } from "react-router-dom";

import { OrangeContainer } from "../../components";

import "./index.css";
import NavigatorMenu from "../../components/NavigatorMenu";

const PerformanceNavigator = () => {
  return (
    <>
      <OrangeContainer>
        <div className="navigator-container">
          <NavigatorMenu menu={"뮤지컬"} />
          <div className="deviding-line"></div>
          <NavigatorMenu menu={"연극"} />
          <div className="devidng-line"></div>
          <NavigatorMenu menu={"콘서트"} />
        </div>
      </OrangeContainer>
    </>
  );
};

export default PerformanceNavigator;
