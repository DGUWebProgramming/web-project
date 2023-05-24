import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrangeContainer } from "../../components";
import { Timer } from "../../components";
import { MouseSpeed } from "../../components";
import "./index.css";

const Ticketing = () => {
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);

  const checkSeat = () => {
    setClick(true);
  }

  const checkSeatDown = () => {
    const currentTime = Date.now();
    setDownClick(currentTime);
  }
  
  const checkSeatUp = () => {
    const currentTime = Date.now();
    setUpClick(currentTime);
  }
  
  useEffect(() => {
    console.log(click);
  }, [click]);

  useEffect(() => {
    console.log(downClick);
  }, [downClick]);
  
  useEffect(() => {
    console.log(upClick);
  }, [upClick]);
  
  return (
    <>
      <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
        <div className="infor">
          <Timer clickValue={click} />
          <MouseSpeed onMouseDownClick={downClick} onMouseUpClick={upClick}/>
        </div>
        <button id="seat" onClick={checkSeat} onMouseDown={checkSeatDown} onMouseUp={checkSeatUp}>좌석 배치도</button>
      </OrangeContainer>
    </>
  );
};

export default Ticketing;