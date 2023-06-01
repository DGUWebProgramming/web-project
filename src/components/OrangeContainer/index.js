import React from "react";
import { Link } from "react-router-dom";

import { Text } from "../index";

import logo from "../../asset/images/logo.svg";
import "./index.css";

const OrangeContainer = ({ category, genre, children }) => {
  return (
    <div className="orange">
      <Link to="/">
        <img className="logo" src={logo} alt="로고" />
      </Link>
      <div className="sidebar">
        <Link to="/ticketing">
          <Text styleClass={"side1"}>티켓팅</Text>
        </Link>
        <Link to="/pi">
          <Text styleClass={"side1"}>공연 정보</Text>
        </Link>
        <Link to="/pi/GGGA">
          <Text styleClass={"side2"}>뮤지컬</Text>
        </Link>
        <Link to="/pi/AAAA">
          <Text styleClass={"side2"}>연극</Text>
        </Link>
        <Link to="/pi/CCCD">
          <Text styleClass={"side2"}>콘서트</Text>
        </Link>
        <Link to="/">
          <Text styleClass={"side1"}>통계</Text>
        </Link>
      </div>
      <div className="white">
        <div className="category">
          {genre ? `${category} - ${genre}` : category}
        </div>
        <div className="white-child">{children}</div>
      </div>
    </div>
  );
};

export default OrangeContainer;
