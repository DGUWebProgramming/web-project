import React from "react";
import logo from "../../asset/logo.svg";
import { Link } from "react-router-dom";

import "./index.css";

const OrangeContainer = ({ category, children }) => {
  return (
    <div className="orange">
      <Link to="/">
        <img className="logo" src={logo} alt="로고" />
      </Link>
      <div className="white">
        <div className="category">{category}</div>
        <div className="white-child">{children}</div>
      </div>
    </div>
  );
};

export default OrangeContainer;
