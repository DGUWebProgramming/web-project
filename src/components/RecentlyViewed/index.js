import React from "react";

import "./index.css";
import MiniInfo from "../MiniInfo";

//localStorage에서 최근 본 공연 일부 몇 개 가져오기

const RecentlyViewed = () => {
  return (
    <div className="recentlyViewed-container">
      <div className="rv-title">최근 본 공연 목록</div>
      {/* MiniInfo의 performance에 localStorage에서의 특정 공연데이터 객체 넣어주시면 됩니다. */}
      <MiniInfo performance=""></MiniInfo>
    </div>
  );
};

export default RecentlyViewed;
