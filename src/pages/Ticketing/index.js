import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrangeContainer, Modal, Timer, MouseSpeed, SeatGroup, DeleyTimer, ResultModal } from "../../components";

import "./index.css";
import stageImageA from "../../asset/images/Stage_image_A.png";
import stageImageB from "../../asset/images/Stage_image_B.png";
import Floor from "../../asset/images/Floor.png";
import reset from "../../asset/images/reset_image.png"

const Ticketing = () => {
  // 클릭시 마우스 정보
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);
  const [allDisable, setAllDisable] = useState(false);
  const [disableList, setDisableList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [setting, setSetting] = useState("setting_A");
  const [difficulty, setDifficulty] = useState("상");

  const checkSeat = (value) => {
    setClick(value);
  };

  const checkSeatDown = (value) => {
    setDownClick(value);
  };

  const checkSeatUp = (value) => {
    setUpClick(value);
  };

  const updateDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    console.log(selectedDifficulty);
  };

  const updateSetting = (selectedSetting) => {
    setSetting(selectedSetting);
    console.log(selectedSetting);
  }

  const updateCheck = (value) => {
    setChecked(value);
    console.log(value);
  }

  const handleDisabled = (value) => {
    console.log("그룹의 모든 버튼이 disable 되었습니다");
    setDisableList((prevList) => [...prevList, value]);
    console.log(disableList);
  };

  useEffect(() => {
    if (disableList.length === 7) {
      console.log("드디어");
      setAllDisable(true);
    }
  }, [disableList]);

  const commonProps = {
    clickValue: click,
    childClick: checkSeat,
    childDown: checkSeatDown,
    childUp: checkSeatUp,
    everyDisabled: handleDisabled,
  };

  return (
    <>
      <Modal updateDifficulty={updateDifficulty} updateSetting={updateSetting} checkClick={updateCheck} />

      {(click || allDisable) ? (<ResultModal clickValue={click} disableValue={allDisable} />) : null}
      {checked ? (
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
                      <SeatGroup styleGroub="seatBox A" size={60} speed={5} {...commonProps} />
                      <SeatGroup styleGroub="seatBox B" size={60} speed={1} {...commonProps} />
                      <SeatGroup styleGroub="seatBox C" size={60} speed={1} {...commonProps} />
                      <SeatGroup styleGroub="seatBox D" size={60} speed={5} {...commonProps} />
                      <SeatGroup styleGroub="seatBox E" size={60} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox F" size={60} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox G" size={60} speed={10} {...commonProps} />
                    </>
                  ) : (
                    <>
                      <img className="stage_image" src={stageImageA} alt={"stage 공간"} />
                      <img className="Floor1" src={Floor} alt={"stage 공간"} />
                      <img className="Floor2" src={Floor} alt={"stage 공간"} />
                      <img className="Floor3" src={Floor} alt={"stage 공간"} />
                      <SeatGroup styleGroub="seatBox A" size={60} speed={50} {...commonProps} />
                      <SeatGroup styleGroub="seatBox B" size={60} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox C" size={60} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox D" size={60} speed={50} {...commonProps} />
                      <SeatGroup styleGroub="seatBox E" size={60} speed={100} {...commonProps} />
                      <SeatGroup styleGroub="seatBox F" size={60} speed={100} {...commonProps} />
                      <SeatGroup styleGroub="seatBox G" size={60} speed={100} {...commonProps} />
                    </>
                  ))
                : (difficulty === "상" ?
                  (
                    <>
                      <img className="stage_image" src={stageImageB} alt={"stage 공간"} />
                      <img className="Floor4" src={Floor} alt={"stage 공간"} />
                      <img className="Floor5" src={Floor} alt={"stage 공간"} />
                      <SeatGroup styleGroub="seatBox a" size={78} speed={5} {...commonProps} />
                      <SeatGroup styleGroub="seatBox b" size={78} speed={1} {...commonProps} />
                      <SeatGroup styleGroub="seatBox c" size={75} speed={1} {...commonProps} />
                      <SeatGroup styleGroub="seatBox d" size={75} speed={5} {...commonProps} />
                      <SeatGroup styleGroub="seatBox e" size={75} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox f" size={136} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox g" size={136} speed={10} {...commonProps} />
                    </>
                  ) : (
                    <>
                      <img className="stage_image" src={stageImageB} alt={"stage 공간"} />
                      <img className="Floor4" src={Floor} alt={"stage 공간"} />
                      <img className="Floor5" src={Floor} alt={"stage 공간"} />
                      <SeatGroup styleGroub="seatBox a" size={78} speed={50} {...commonProps} />
                      <SeatGroup styleGroub="seatBox b" size={78} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox c" size={75} speed={10} {...commonProps} />
                      <SeatGroup styleGroub="seatBox d" size={75} speed={50} {...commonProps} />
                      <SeatGroup styleGroub="seatBox e" size={75} speed={100} {...commonProps} />
                      <SeatGroup styleGroub="seatBox f" size={136} speed={100} {...commonProps} />
                      <SeatGroup styleGroub="seatBox g" size={136} speed={100} {...commonProps} />
                    </>
                  ))}
            </div>
          </OrangeContainer>
        </>
      ) :
        (
          <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
            <div className="reset">
              <img className="resetImage" src={reset} alt="새로고침" />
              <p className="resetText">새로고침 하셔서 난이도와 좌석 형태를 선택해주세요!</p>
            </div>
          </OrangeContainer>
        )}
    </>
  );
};

export default Ticketing;