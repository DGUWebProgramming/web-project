import React, { useEffect, useRef, useState } from "react";

import SeatButton from '../SeatButton';

import "./index.css";

const SeatGroup = ({ styleGroub, size, speed, clickValue, childClick, childDown, childUp, everyDisabled}) => {
  const [disableSeat, setDisableSeat] = useState(Array(size).fill(null));
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);

  const startInterval = () => {
    intervalId.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * size);
      setDisableSeat((prevSeats) => {
        const updatedSeats = [...prevSeats];
        updatedSeats[randomIndex] = true;
        return updatedSeats;
      });
    }, speed);
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
      stopInterval(); // 버튼이 클릭되면 인터벌 정지
    }
  
    return () => {
      clearTimeout(timeoutId); // 컴포넌트 언마운트 시 타임아웃 정지
      clearInterval(intervalId.current); // 컴포넌트 언마운트 시 인터벌 정지
    };
  
  }, [clickValue]);

  useEffect(() => {
    // disableSeat 배열이 변경될 때마다 전체 버튼이 비활성화되었는지 확인함
    const allDisabled = disableSeat.every((disabled) => disabled);
    // 모두 비활성화 되었으면 부모 컴포넌트로 전달할 함수 호출
    if (count === 0 & allDisabled) {
      everyDisabled(allDisabled);
      setCount(1);
    }
  }, [disableSeat, everyDisabled]);

  const checkSeat = (value) => {
    childClick(value);
  };

  const checkSeatDown = (value) => {
    childDown(value);
  };

  const checkSeatUp = (value) => {
    childUp(value);
  };

  return (
    <>
      <div className={styleGroub}>
        {disableSeat.map((disabled, index) => (
          <SeatButton
            key={index}
            styleClass="SeatBtn"
            disabledButton={disabled}
            childClick={checkSeat}
            childDown={checkSeatDown}
            childUp={checkSeatUp}
          ></SeatButton>
        ))}
      </div>
    </>
  );
};

export default SeatGroup;