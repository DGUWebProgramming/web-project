import React from "react";
import { useRecoilValue } from "recoil";

import { clickCountByDateAtom } from "../../state";
import { OrangeContainer, ChartBar, RecentlyViewed } from "../../components";

import "./index.css";

const OverView = () => {
  const clickCountByDate = useRecoilValue(clickCountByDateAtom);

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
          <RecentlyViewed />
        </div>
      </OrangeContainer>
    </>
  );
};

export default OverView;
