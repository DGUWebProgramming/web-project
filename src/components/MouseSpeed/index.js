import React from "react";
import "./index.css"
import mouse from "../../asset/Mouse.png"
import { useState, useEffect } from 'react';

const MouseSpeed = () => {

  const [startTime, setStartTime] = useState(0);
  const [firstClickTime, setFirstClickTime] = useState(0);

  const handleClick = () => {
    if (firstClickTime === 0) {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      setFirstClickTime(timeElapsed);
    }
  };

  useEffect(() => {
    const loadingCompletedTime = Date.now();
    setStartTime(loadingCompletedTime);
  }, []);

  const formatTime = (time) => {
    return time > 0 ? `${time}  ` : '0';
  };

  return (
    <>
      <div className="speedBox" onClick={handleClick}>
        <img src={mouse} alt={"mouse_image"} />
        <div>
          <p>마우스 클릭 속도</p>
          <p>{firstClickTime > 0 ? formatTime(firstClickTime) : 0 }ms</p>
        </div>
      </div>
    </>
  );
};

export default MouseSpeed;