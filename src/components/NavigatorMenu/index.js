import React from "react";

import { Text } from "../index";

import "./index.css";

const NavigatorMenu = ({ menu, img }) => {
  return (
    <div className="menu-container">
      <div className="menu-box">
        <img className="menu-icon" src={img} alt={menu} />
        <Text styleClass="text6">{menu}</Text>
      </div>
    </div>
  );
};

export default NavigatorMenu;
