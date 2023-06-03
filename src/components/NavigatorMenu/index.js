import React from "react";
import { Link } from "react-router-dom";

import Text from "../Text";

import "./index.css";

const NavigatorMenu = ({ menu, img }) => {
  return (
    <div className="menu-container">
      <Link to="">
        <div className="menu-box">
        <img className="menu-icon" src={img} alt={menu} />
        <Text styleClass="text6">{menu}</Text>
        </div>
      </Link>
    </div>
  );
};

export default NavigatorMenu;
