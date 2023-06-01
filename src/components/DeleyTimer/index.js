import React, { useEffect, useState } from "react";

import SeatButton from '../SeatButton';

import "./index.css";

const DeleyTimer = ({ styleClass, Time }) => {
  const [time, setTime] = useState(Time);
  const [style, setStyle] = useState(styleClass);
  styleClass =

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((T) => T - 1);
    }, 1000);

    if (time === 0) {
      debugger;
      clearInterval(intervalId);
      setStyle((s) => s = "after")
    }

    return () => clearInterval(intervalId);
  }, [time, style]); 

  return (
    <>
      <div className={style} >
        {time}초 후 시작합니다
      </div>
    </>
  );
};

export default DeleyTimer;