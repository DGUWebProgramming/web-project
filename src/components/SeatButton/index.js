import React from "react";

import "./index.css";

const SeatButton = ({ styleClass, disabledButton, childClick, childDown, childUp }) => {

  const checkSeat = () => {
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
      disabled={disabledButton}
      onClick={checkSeat}
      onMouseDown={checkSeatDown}
      onMouseUp={checkSeatUp}
    />
  );
};

export default SeatButton;