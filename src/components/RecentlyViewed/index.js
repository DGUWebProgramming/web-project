import React from "react";
import { Link } from "react-router-dom";

import { MiniInfo } from "../index";
import "./index.css";

//localStorage에서 최근 본 공연 일부 몇 개 가져오기

const RecentlyViewed = () => {
  return (
    <div className="recentlyViewed-container">
      <div className="rv-title">최근 본 공연 목록</div>
      {/* <Link to={`/detail/공연id값`}> */}
      {/* MiniInfo의 performance에 localStorage에서의 특정 공연데이터 객체 넣어주시면 됩니다. */}
        <MiniInfo performance=""></MiniInfo>
      {/* </Link> */}
    </div>
  );
};

export default RecentlyViewed;
