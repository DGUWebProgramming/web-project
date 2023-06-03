import React, { useRef } from "react";

import { useState, useEffect } from 'react';

import "../Timer/index.css"

const Timer = ({ clickValue, disableValue }) => {
  // difficulty

  const [stopWatch, setStopWatch] = useState(0);
  const intervalId = useRef(null)

  const startInterval = () => {
    intervalId.current = setInterval(() => {
      setStopWatch(time => time + 1);
    }, 10);
  };

  const stopInterval = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!clickValue && !disableValue) {
        startInterval(); // 버튼이 클릭되지 않으면 인터벌 실행
      }
    }, 3000); // 3초 지연

    if (clickValue) {
      stopInterval();
    }
    else if (disableValue) {
      stopInterval();
    }

    return () => {
      clearTimeout(timeoutId); // 컴포넌트 언마운트 시 타임아웃 정지
      clearInterval(intervalId.current); // 컴포넌트 언마운트 시 인터벌 정지
    };

  }, [clickValue, disableValue]);

  return (
    <>
      <div className="timeBox">
        <div>걸린 시간</div>
        <div id="time_text">
          <span>{Math.floor(stopWatch / 100)}.</span>
          <span> {stopWatch % 100}</span>
        </div>
      </div>
    </>
  );
};

export default Timer;