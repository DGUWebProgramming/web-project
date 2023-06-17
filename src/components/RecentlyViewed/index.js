import React from "react";
import { Link } from "react-router-dom";

import { MiniInfo } from "../index";
import "./index.css";

//localStorage에서 최근 본 공연 일부 몇 개 가져오기

const RecentlyViewed = () => {
  const visitedKeys = Object.keys(localStorage).filter((key) =>
    key.includes("performanceDetail-")
  );
  visitedKeys.reverse();
  let visitedData = visitedKeys.map(
    (key) => JSON.parse(localStorage.getItem(key)).dbs.db
  );
  visitedData = visitedData.slice(Math.max(visitedData.length - 5, 0));
  return (
    <div className="recentlyViewed-container">
      <div className="rv-title">최근 본 공연 목록</div>
      <div className="miniInfoList">
        {visitedData.map((data, idx) => (
          <Link
            to={`/detail/${data[0].mt20id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={idx}
          >
            <MiniInfo performance={data[0]}></MiniInfo>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
