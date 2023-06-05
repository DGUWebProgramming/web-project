import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { clickCountByDateAtom } from "../../state";

import { OrangeContainer } from "../../components";

import "./index.css";

const OverView = () => {
  const clickCountByDate = useRecoilValue(clickCountByDateAtom);
  return (
    <>
      <OrangeContainer>
        <div>OverView 페이지</div>
        <div>
          {Object.entries(clickCountByDate).map(([date, counts]) => (
            <div key={date}>
              <div>Date: {date}</div>
              <div>상: {counts.상}</div>
              <div>하: {counts.하}</div>
            </div>
          ))}
        </div>
      </OrangeContainer>
    </>
  );
};

export default OverView;
