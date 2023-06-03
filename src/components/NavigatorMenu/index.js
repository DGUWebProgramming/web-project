import React from "react";
import { Link } from "react-router-dom";

import Text from "../Text";

import "./index.css";

const NavigatorMenu = ({ menu, img }) => {
  // menu 값에 따라서 Link의 대상을 결정
  let linkTo = "";
  switch(menu) {
    case "뮤지컬":
      linkTo = "/pi/GGGA";
      break;
    case "연극":
      linkTo = "/pi/AAAA";
      break;
    case "콘서트":
      linkTo = "/pi/CCCD";
      break;
    default:
      linkTo = "";
  }

  return (
    <div className="menu-container">
      <Link to={linkTo}>
        <div className="menu-box">
        <img className="menu-icon" src={img} alt={menu} />
        <Text styleClass="text6">{menu}</Text>
        </div>
      </Link>
    </div>
  );
};

export default NavigatorMenu;
