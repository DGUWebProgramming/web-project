import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../index";
import logo from "../../asset/images/wide-logo.svg";

import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img className="wide-logo" src={logo} alt="헤더로고" />
      </Link>
      <div className="button-group">
        <Link to="/main">
          <Button styleClass={"shortcut"}>OverView</Button>
        </Link>
        <Link to="/">
          <Button styleClass={"about-button"}>티켓팅 연습</Button>
        </Link>
        <Link to="/main">
          <Button styleClass={"shortcut"}>공연 정보</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
