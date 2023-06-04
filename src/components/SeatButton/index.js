import React, { useEffect, useState } from "react";

import "./index.css";

const SeatButton = ({ styleClass, disabledButton, childClick, childDown, childUp }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [clickValue, setClickValue] = useState(false);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonDisabled(false); // 3초 후에 버튼 활성화
    }, 3000);
  
    return () => clearTimeout(timeoutId); // 컴포넌트 언마운트 시 타임아웃 정지
  }, []);

  if (clickValue) {
    styleClass = "clickSeatBtn"
  }

  const checkSeat = () => {
    setClickValue(true);
    childClick(true);
  };

  const checkSeatDown = () => {
    const currentTime = Date.now();
    childDown(currentTime);
  };

  const checkSeatUp = () => {
    const currentTime = Date.now();
    childUp(currentTime);
  };

  // disbled 상태는 red
  // 눌린 버튼은 blue
  return (
    <button
      className={styleClass}
      disabled={disabledButton || buttonDisabled}
      onClick={checkSeat}
      onMouseDown={checkSeatDown}
      onMouseUp={checkSeatUp}
    />
  );
};

export default SeatButton;