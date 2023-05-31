import React, { useEffect, useState } from "react";

import SeatButton from '../SeatButton';

import "./index.css";

const SeatGroub = ({ styleGroub, size, speed, childClick, childDown, childUp, clickValue }) => {
  const [id, setId] = useState(null);
  const [disableSeat, setDisableSeat] = useState(Array(size).fill(null));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * size);
      setDisableSeat((prevSeats) => {
        const updatedSeats = [...prevSeats];
        updatedSeats[randomIndex] = true;
        return updatedSeats;
      });
    }, speed);

    setId(intervalId);
    if (clickValue) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [clickValue]);

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

export default SeatGroub;