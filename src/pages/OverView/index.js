import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { clickCountByDateAtom } from "../../state";
import { OrangeContainer, ChartBar, RecentlyViewed } from "../../components";

import "./index.css";

const cs = {
  "2020-6-1": { 상: 1, 하: 2 },
  "2020-6-2": { 상: 1, 하: 2 },
  "2020-6-3": { 상: 1, 하: 2 },
  "2020-6-4": { 상: 1, 하: 2 },
  "2020-6-5": { 상: 1, 하: 5 },
  "2020-7-1": { 상: 1, 하: 2 },
  "2020-7-2": { 상: 1, 하: 2 },
  "2020-7-3": { 상: 1, 하: 2 },
  "2020-7-4": { 상: 1, 하: 2 },
};

const OverView = () => {
  const clickCountByDate = useRecoilValue(clickCountByDateAtom);
  console.log(clickCountByDate);

  return (
    <>
      <OrangeContainer
        category={"OVERVIEW"}
        desc={
          "티켓팅 성공과 공연 탐험을 기록하는 페이지입니다. 성공 횟수와 공연 목록을 확인해보세요!"
        }
      >
        <div className="overviewBox">
          <ChartBar
            title={"최근 7일간 성공한 티켓팅 연습 횟수"}
            data={Object.entries(clickCountByDate)}
          />
          <RecentlyViewed/>
        </div>
      </OrangeContainer>
    </>
  );
};

export default OverView;
