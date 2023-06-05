import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { clickCountByDateAtom } from "../../state";
import { OrangeContainer, ChartBar } from "../../components";

import "./index.css";

const cs = {
  2020: { 상: 1, 하: 2 },
  2021: { 상: 1, 하: 2 },
  2022: { 상: 1, 하: 2 },
  2023: { 상: 1, 하: 2 },
  2024: { 상: 1, 하: 5},
  2025: { 상: 1, 하: 2 },
  2026: { 상: 1, 하: 2 },
  2027: { 상: 1, 하: 2 },
  2028: { 상: 1, 하: 2 },
}

const OverView = () => {
  const clickCountByDate = useRecoilValue(clickCountByDateAtom);
  console.log(clickCountByDate);

  return (
    <>
      <OrangeContainer category={"티켓팅 연습"} desc={"여러분이 사이트에서 그동안 무엇을 했을지 함께 알아보아요!"}>
        <div className="overviewBox">
          <ChartBar title={"성공한 티켓팅 연습 횟수"} data={Object.entries(clickCountByDate)} />
          
        </div>
      </OrangeContainer>  
    </>
  );
};

export default OverView;