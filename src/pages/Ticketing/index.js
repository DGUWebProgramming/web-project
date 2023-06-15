import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import {
  OrangeContainer,
  Modal,
  Timer,
  MouseSpeed,
  SeatGroup,
  DeleyTimer,
  ResultModal,
} from "../../components";

import "./index.css";
import stageImageA from "../../asset/images/Stage_image_A.png";
import stageImageB from "../../asset/images/Stage_image_B.png";
import FloorA from "../../asset/images/Floor_Setting_A.png";
import Floor from "../../asset/images/Floor.png";
import reset from "../../asset/images/reset_image.png";

const reducer = (state, action) => {
  switch (action.type) {
    case "checkSeat": // 좌석 클릭 유무
      return { ...state, click: action.value };
    case "checkSeatDown": // 마우스 눌렀을 때 시간
      return { ...state, downClick: action.value };
    case "checkSeatUp": // 마우스 땠을 때 시간
      return { ...state, upClick: action.value };
    case "handleDisabled":
      if (action.value) {
        return { ...state, disabledCount: state.disabledCount + 1};
      }
      return { ...state };
    case "updateDifficulty": // 난이도
      return { ...state, difficulty: action.value };
    case "updateSetting": // 좌석 형태
      return { ...state, setting: action.value };
    case "updateCheck":
      return { ...state, checked: action.value };
    case "setAllDisable":
      return { ...state, allDisable: action.value };
    default:
      return state;
  }
};

const Ticketing = () => {
  const initialState = {
    click: false,
    downClick: 0,
    upClick: 0,
    allDisable: false,
    disabledCount: 0,
    checked: false,
    setting: "setting_A",
    difficulty: "상",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const commonProps = {
    clickValue: state.click,
    childClick: (value) => {
      dispatch({ type: "checkSeat", value });
    },
    childDown: (value) => {
      dispatch({ type: "checkSeatDown", value });
    },
    childUp: (value) => {
      dispatch({ type: "checkSeatUp", value });
    },
    everyDisabled: (value) => {
      console.log(state.disabledCount);
      dispatch({ type: "handleDisabled", value: [value] });
    },
  };

  const updateDifficulty = (selectedDifficulty) => {
    dispatch({ type: "updateDifficulty", value: selectedDifficulty });
  };

  const updateSetting = (selectedSetting) => {
    dispatch({ type: "updateSetting", value: selectedSetting });
  };

  const updateCheck = (value) => {
    dispatch({ type: "updateCheck", value });
  };

  useEffect(() => {
    if (state.disabledCount === 7) {
      dispatch({ type: "setAllDisable", value: true });
    }
  }, [state.disabledCount]);

  return (
    <>
      <Modal
        updateDifficulty={updateDifficulty}
        updateSetting={updateSetting}
        checkClick={updateCheck}
      />

      {state.click || state.allDisable ? (
        <ResultModal
          clickValue={state.click}
          disableValue={state.allDisable}
          mode={state.difficulty}
        />
      ) : null}
      {state.checked ? (
        <>
          <DeleyTimer styleClass="box" Time={3} />
          <OrangeContainer className="OrangeContainer" category={"티켓팅 연습"}>
            <div className="infor">
              <Timer clickValue={state.click} disableValue={state.allDisable} />
              <MouseSpeed
                onMouseDownClick={state.downClick}
                onMouseUpClick={state.upClick}
              />
            </div>
            <div className="seatContainer">
              {state.setting === "setting_A" ? (
                state.difficulty === "상" ? (
                  <>
                    <img
                      className="stage_image"
                      src={stageImageA}
                      alt={"stage 공간"}
                    />
                    <img className="Floor1" src={FloorA} alt={"stage 공간"} />
                    <SeatGroup
                      styleGroub="seatBox A"
                      size={60}
                      speed={3}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox B"
                      size={60}
                      speed={1}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox C"
                      size={60}
                      speed={1}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox D"
                      size={60}
                      speed={3}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox E"
                      size={60}
                      speed={7}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox F"
                      size={60}
                      speed={7}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox G"
                      size={60}
                      speed={7}
                      {...commonProps}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="stage_image"
                      src={stageImageA}
                      alt={"stage 공간"}
                    />
                    <img className="Floor1" src={FloorA} alt={"stage 공간"} />
                    <SeatGroup
                      styleGroub="seatBox A"
                      size={60}
                      speed={10}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox B"
                      size={60}
                      speed={5}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox C"
                      size={60}
                      speed={5}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox D"
                      size={60}
                      speed={10}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox E"
                      size={60}
                      speed={25}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox F"
                      size={60}
                      speed={25}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox G"
                      size={60}
                      speed={25}
                      {...commonProps}
                    />
                  </>
                )
              ) : state.difficulty === "상" ? (
                <>
                  <img
                    className="stage_image"
                    src={stageImageB}
                    alt={"stage 공간"}
                  />
                  <img className="Floor2" src={Floor} alt={"stage 공간"} />
                  <img className="Floor3" src={Floor} alt={"stage 공간"} />
                  <SeatGroup
                    styleGroub="seatBox a"
                    size={78}
                    speed={1}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox b"
                    size={78}
                    speed={1}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox c"
                    size={75}
                    speed={3}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox d"
                    size={75}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox e"
                    size={75}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox f"
                    size={72}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox g"
                    size={72}
                    speed={5}
                    {...commonProps}
                  />
                </>
              ) : (
                <>
                  <img
                    className="stage_image"
                    src={stageImageB}
                    alt={"stage 공간"}
                  />
                  <img className="Floor2" src={Floor} alt={"stage 공간"} />
                  <img className="Floor3" src={Floor} alt={"stage 공간"} />
                  <SeatGroup
                    styleGroub="seatBox a"
                    size={78}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox b"
                    size={78}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox c"
                    size={75}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox d"
                    size={75}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox e"
                    size={75}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox f"
                    size={72}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox g"
                    size={72}
                    speed={10}
                    {...commonProps}
                  />
                </>
              )}
            </div>
          </OrangeContainer>
        </>
      ) : (
        <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
          <div className="reset">
            <img className="resetImage" src={reset} alt="새로고침" />
            <p className="resetText">
              새로고침(F5) 이후 난이도와 좌석 형태를 선택해주세요!
            </p>
          </div>
        </OrangeContainer>
      )}
    </>
  );
};

export default Ticketing;
