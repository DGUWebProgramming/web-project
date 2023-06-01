import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { OrangeContainer, Timer, MouseSpeed, SeatGroup, DeleyTimer } from "../../components";

import "./index.css";
import stageImageA from "../../asset/images/Stage_image_A.png";
import stageImageB from "../../asset/images/Stage_image_B.png";
import Floor from "../../asset/images/Floor.png";

const Ticketing = () => {
  // 클릭시 마우스 정보
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);
  const setting = "setting_A";
  const difficulty = "하"; // modal 창에서 난이도 입력 받으면

  const checkSeat = (value) => {
    setClick(value);
  };

  const checkSeatDown = (value) => {
    setDownClick(value);
  };

  const checkSeatUp = (value) => {
    setUpClick(value);
  };

  return (
    <>
    <DeleyTimer styleClass="box" Time={3} />
      <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
        <div className="infor">
          <Timer clickValue={click} />
          <MouseSpeed onMouseDownClick={downClick} onMouseUpClick={upClick} />
        </div>
        <div className="seatContainer">
          {setting === "setting_A" ?
            (difficulty === "상" ?
              (
                <>
                  <img className="stage_image" src={stageImageA} alt={"stage 공간"} />
                  <img className="Floor1" src={Floor} alt={"stage 공간"} />
                  <img className="Floor2" src={Floor} alt={"stage 공간"} />
                  <img className="Floor3" src={Floor} alt={"stage 공간"} />
                  <SeatGroup styleGroub="seatBox A" size={60} speed={5} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox B" size={60} speed={1} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox C" size={60} speed={1} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox D" size={60} speed={5} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox E" size={60} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox F" size={60} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox G" size={60} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                </>
              ) : (
                <>
                  <img className="stage_image" src={stageImageA} alt={"stage 공간"} />
                  <img className="Floor1" src={Floor} alt={"stage 공간"} />
                  <img className="Floor2" src={Floor} alt={"stage 공간"} />
                  <img className="Floor3" src={Floor} alt={"stage 공간"} />
                  <SeatGroup styleGroub="seatBox A" size={60} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox B" size={60} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox C" size={60} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox D" size={60} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox E" size={60} speed={100} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox F" size={60} speed={100} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox G" size={60} speed={100} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                </>
              ))
            : (difficulty === "상" ?
              (
                <>
                  <img className="stage_image" src={stageImageB} alt={"stage 공간"} />
                  <img className="Floor4" src={Floor} alt={"stage 공간"} />
                  <img className="Floor5" src={Floor} alt={"stage 공간"} />
                  <SeatGroup styleGroub="seatBox a" size={78} speed={5} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox b" size={78} speed={1} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox c" size={75} speed={1} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox d" size={75} speed={5} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox e" size={75} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox f" size={136} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox g" size={136} speed={10} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                </>
              ) : (
                <>
                  <img className="stage_image" src={stageImageB} alt={"stage 공간"} />
                  <img className="Floor4" src={Floor} alt={"stage 공간"} />
                  <img className="Floor5" src={Floor} alt={"stage 공간"} />
                  <SeatGroup styleGroub="seatBox a" size={78} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox b" size={78} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox c" size={75} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox d" size={75} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox e" size={75} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox f" size={136} speed={50} childClick={checkSeat} childDow n={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                  <SeatGroup styleGroub="seatBox g" size={136} speed={50} childClick={checkSeat} childDown={checkSeatDown} childUp={checkSeatUp} clickValue={click} />
                </>
              ))
          }
        </div>
      </OrangeContainer>
    </>
  );
};

export default Ticketing;