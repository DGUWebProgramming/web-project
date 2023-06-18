import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../index";
import logo from "../../asset/images/logo.png";

import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img className="wide-logo" src={logo} alt="헤더로고" />
      </Link>
      <div className="button-group">
        <Link to="/overview">
          <Button styleClass={"shortcut"}>OverView</Button>
        </Link>
        <Link to="/ticketing">
          <Button styleClass={"about-button"}>티켓팅 연습</Button>
        </Link>
        <Link to="/pi">
          <Button styleClass={"shortcut"}>공연 정보</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
