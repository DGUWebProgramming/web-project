import React from "react";
import { Link } from "react-router-dom";

import { OrangeContainer, NavigatorMenu } from "../../components";

import musical from "../../asset/images/musical.png";
import play from "../../asset/images/play_theater.png";
import concert from "../../asset/images/concert.png";
import "./index.css";

const PerformanceNavigator = () => {
  return (
    <>
      <OrangeContainer category={"공연 정보"}>
        <div className="navigator-container">
          <NavigatorMenu menu={"뮤지컬"} img={musical} />
          <NavigatorMenu menu={"연극"} img={play} />
          <NavigatorMenu menu={"콘서트"} img={concert} />
        </div>
      </OrangeContainer>
    </>
  );
};

export default PerformanceNavigator;
