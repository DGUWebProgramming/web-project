import React from "react";
import { Link } from "react-router-dom";

import { OrangeContainer, NavigatorMenu } from "../../components";

import musical from "../../asset/images/musical.png";
import play from "../../asset/images/play_theater.png";
import concert from "../../asset/images/concert.png";
import "./index.css";

const PerformanceNavigator = () => {
  const description = "국내의 다양한 공연 정보를 지금 바로 만나보세요.";
  const musicalDesc = "꿈과 판타지 펼쳐지는 순간을 담아낸 뮤지컬의 세계를 만나보세요.";
  const playDesc = "삶의 깊은 이야기를 담아내는 연극의 세계를 만나보세요.";
  const concertDesc =["현장에서 직접 느끼는 음악,", <br />, "콘서트에서만 경험할 수 있는 순간들을 만나보세요."];

  return (
    <>
      <OrangeContainer category={"공연 정보"} desc={description}>
        <div className="navigator-container">
          <Link to="/pi/GGGA">
            <NavigatorMenu menu={"뮤지컬"} img={musical} desc={musicalDesc}/>
          </Link>
          <Link to="/pi/AAAA">
            <NavigatorMenu menu={"연극"} img={play} desc={playDesc}/>
          </Link>
          <Link to="/pi/CCCD">
            <NavigatorMenu menu={"콘서트"} img={concert} desc={concertDesc}/>
          </Link>
        </div>
      </OrangeContainer>
    </>
  );
};

export default PerformanceNavigator;
