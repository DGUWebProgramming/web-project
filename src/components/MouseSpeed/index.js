import React from "react";
import "./index.css"
import mouse from "../../asset/Mouse.png"
import { useState, useEffect } from 'react';

const MouseSpeed = ({ onMouseDownClick, onMouseUpClick }) => {

  const [startTime, setStartTime] = useState(0);
  const [firstClickTime, setFirstClickTime] = useState(0);

  useEffect(() => {
    const loadingCompletedTime = onMouseDownClick;
    setStartTime(loadingCompletedTime);
  }, [onMouseDownClick]);

  useEffect(() => {
    // 한번 클릭 시 그 이후의 동작은 무시
    // if (firstClickTime === 0) {
    //   const currentTime = onMouseUpClick;
    //   const timeElapsed = currentTime - startTime;
    //   console.log(timeElapsed);
    //   setFirstClickTime(timeElapsed);
    // }
    const currentTime = onMouseUpClick;
    const timeElapsed = currentTime - startTime;
    console.log(timeElapsed);
    setFirstClickTime(timeElapsed);
  }, [onMouseUpClick]);

  const formatTime = (time) => {
    return time > 0 ? `${time}  ` : '0';
  };

  return (
    <>
      <div className="speedBox" >
        <img src={mouse} alt={"mouse_image"} />
        <div>
          <p>마우스 클릭 속도</p>
          <p>{firstClickTime > 0 ? formatTime(firstClickTime) : 0}ms</p>
        </div>
      </div>
    </>
  );
};

export default MouseSpeed;