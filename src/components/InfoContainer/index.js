import React from "react";
import buttonIcon from "../../asset/images/button_icon.png";

import "./index.css";

const InfoContainer = ({ imgsrc, title }) => {
  return (
    <div className="info-container">
      <div className="image-container">
        <img className="image" src={imgsrc} alt="공연이미지" />
      </div>
      <div className="button-container">
        <div className="icon-background">
          <img className="icon" src={buttonIcon} alt="버튼아이콘" />
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default InfoContainer;
