import React from "react";

import "./index.css";

const DetailInfo = ({ performance }) => {
  return (
    <div className="detail-container">
      <p className="genre">{performance.genre}</p>
      <h2 className="title">{performance.prfnm}</h2>
      <div className="detail-contents">
        <img className="img" src={performance.poster} alt="공연포스터"/>

        <ul className="info">
          <li>
            <strong>공연기간</strong>
            {performance.prfpdfrom}~{performance.prfpdto}
          </li>
          <li>
            <strong>공연장소</strong>
            {performance.fcltynm}
          </li>
          <li>
            <strong>공연시간</strong>
            {performance.dtguidance}
          </li>
          <li>
            <strong>관람연령</strong>
            {performance.prfage}
          </li>
          <li>
            <strong>티켓가격</strong>
            {performance.pcseguidance}
          </li>
          <li>
            <strong>출연진</strong>
            {performance.prfcast}
          </li>
          <li>
            <strong>러닝타임</strong>
            {performance.prfruntime}
          </li>
          <li>
            <strong>공연상태</strong>
            {performance.prfstate}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailInfo;
