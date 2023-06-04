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
          <Link to="/pi/GGGA">
            <NavigatorMenu menu={"뮤지컬"} img={musical} />
          </Link>
          <Link to="/pi/AAAA">
            <NavigatorMenu menu={"연극"} img={play} />
          </Link>
          <Link to="/pi/CCCD">
            <NavigatorMenu menu={"콘서트"} img={concert} />
          </Link>
        </div>
      </OrangeContainer>
    </>
  );
};

export default PerformanceNavigator;
