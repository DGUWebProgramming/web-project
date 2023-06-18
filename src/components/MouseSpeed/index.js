import React, { useState, useEffect } from "react";

import "./index.css";
import mouse from "../../asset/images/Mouse.png";

const MouseSpeed = ({ onMouseDownClick, onMouseUpClick }) => {
  const [startTime, setStartTime] = useState(0);
  const [firstClickTime, setFirstClickTime] = useState(0);

  useEffect(() => {
    const loadingCompletedTime = onMouseDownClick;
    setStartTime(loadingCompletedTime);
  }, [onMouseDownClick]);

  useEffect(() => {
    const currentTime = onMouseUpClick;
    const timeElapsed = currentTime - startTime;
    setFirstClickTime(timeElapsed);
  }, [onMouseUpClick]);

  const formatTime = (time) => {
    return time > 0 ? `${time}  ` : "0";
  };

  return (
    <>
      <div className="speedBox">
        <img className="mouse_img" src={mouse} alt={"mouse_image"} />
        <div>
          <p>마우스 클릭 속도</p>
          <p>{firstClickTime > 0 ? formatTime(firstClickTime) : 0}ms</p>
        </div>
      </div>
    </>
  );
};

export default MouseSpeed;
