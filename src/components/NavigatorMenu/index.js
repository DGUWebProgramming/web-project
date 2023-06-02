import React from "react";

import "./index.css";

const NavigatorMenu = ({ menu }) => {
  return (
    <div className="menu-container">
      <p calssName="menu-title">{menu}</p>
    </div>
  );
};

export default NavigatorMenu;
