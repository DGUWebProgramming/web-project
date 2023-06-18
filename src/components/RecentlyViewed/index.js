import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { recentPerformancesState } from "../../state";
import { MiniInfo } from "../index";

import "./index.css";

const RecentlyViewed = () => {
  const recentPerformances = useRecoilValue(recentPerformancesState);

  return (
    <div className="recentlyViewed-container">
      <div className="rv-title">최근 본 공연 목록</div>
      <div className="miniInfoList">
        {recentPerformances.map((performance, idx) => (
          <Link
            to={`/detail/${performance.mt20id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={idx}
          >
            <MiniInfo performance={performance} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
