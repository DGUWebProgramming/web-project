import React from "react";

import { useState, useEffect } from 'react';

import "../Timer/index.css"

const Timer = ({clickValue}) => {
  // difficulty

  const [limitTime, setlimitTime] = useState(90);
  //useState(difficulty === "상" ? 30 : 60);

  useEffect(() => {
    const id = setInterval(() => {
      setlimitTime(limitTime => limitTime - 1);
    }, 1000);
    if (limitTime == 0 || clickValue) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [limitTime, clickValue]);

  return (
    <>
      <div className="timeBox">
        <div>남은 시간</div>
        <div id="time_text">
          <span>{Math.floor(limitTime / 60)}분</span>
          <span>{limitTime % 60}초</span>
        </div>
      </div>
    </>
  );
};

export default Timer;