import React from "react";

import { Text } from "../index";

import "./index.css";

const NavigatorMenu = ({ menu, img, desc }) => {
  return (
    <div className="menu-container">
      <div className="menu-box">
        <div className="menu-title">
          <Text styleClass="text6">{menu}</Text>
        </div>
        <div className="menu-desc">
          <Text styleClass="text8">{desc}</Text>
        </div>
        <img className="menu-icon" src={img} alt={menu} />
      </div>
    </div>
  );
};

export default NavigatorMenu;
