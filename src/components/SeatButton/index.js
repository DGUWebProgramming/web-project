import React from "react";

import "./index.css";

const SeatButton = ({ styleClass, disabledButton, onclick, onmouseDown, onmouseUp }) => {

  const checkSeat = () => {
    console.log("Button clicked");
    const returnValue = true;
    if (typeof onclick === "function") {
      onclick(returnValue); // 클릭 이벤트 핸들러에 리턴 값을 전달
    }
  };

  const checkSeatDown = () => {
    console.log("Button down");
    const currentTime = Date.now();
    if (typeof onmouseDown === "function") {
      onmouseDown(currentTime); // 마우스 다운 이벤트 핸들러에 리턴 값을 전달
    }
  };

  const checkSeatUp = () => {
    console.log("Button up");
    const currentTime = Date.now();
    if (typeof onmouseUp === "function") {
      onmouseUp(currentTime); // 마우스 업 이벤트 핸들러에 리턴 값을 전달
    }
  };

  // disbled 상태는 red
  // 눌린 버튼은 blue
  return (
    <button 
    className={styleClass}
    disabled={disabledButton}
    onClick={checkSeat}
    onMouseDown={checkSeatDown}
    onMouseUp={checkSeatUp}
    ></button>
  );
};

export default SeatButton;
