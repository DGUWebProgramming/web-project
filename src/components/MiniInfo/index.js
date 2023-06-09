import React from "react";

import { Text } from "../index";
import "./index.css";

const MiniInfo = ({ performance }) => {
  return (
    <div className="miniInfo-container">
      <div className="mini-img-box">
        <img className="mini-img" src={performance.poster} alt="공연포스터" />
      </div>
      <div className="mini-title">
        <Text styleClass="text9">{performance.prfnm}</Text>
      </div>
      <div className="mini-genre">
        <Text styleClass="text10">{performance.genrenm}</Text>
      </div>
    </div>
  );
};

export default MiniInfo;
