import React, { useRef } from "react";

import { useState, useEffect } from 'react';

import "../Timer/index.css"

const Timer = ({ clickValue }) => {
  // difficulty

  const [limitTime, setlimitTime] = useState(90);
  const intervalId = useRef(null)

  const startInterval = () => {
    intervalId.current = setInterval(() => {
      setlimitTime(limitTime => limitTime - 1);
    }, 500);
  };

  const stopInterval = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!clickValue) {
        startInterval(); // 버튼이 클릭되지 않으면 인터벌 실행
      }
    }, 3000); // 3초 지연

    if (clickValue) {
      stopInterval();
    }

    return () => {
      clearTimeout(timeoutId); // 컴포넌트 언마운트 시 타임아웃 정지
      clearInterval(intervalId.current); // 컴포넌트 언마운트 시 인터벌 정지
    };

  }, [clickValue]);

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