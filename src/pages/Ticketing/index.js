import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrangeContainer } from "../../components";
import { Timer } from "../../components";
import { MouseSpeed } from "../../components";
import "./index.css";
import Modal from "../../components/Modal";

const Ticketing = () => {
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);

  const checkSeat = () => {
    setClick(true);
  }

  const checkSeatDown = () => {
    const currentTime = Date.now();
    setDownClick(currentTime);
  }
  
  const checkSeatUp = () => {
    const currentTime = Date.now();
    setUpClick(currentTime);
  }
  
  useEffect(() => {
    console.log(click);
  }, [click]);

  useEffect(() => {
    console.log(downClick);
  }, [downClick]);
  
  useEffect(() => {
    console.log(upClick);
  }, [upClick]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>티켓팅 연습하기</button>
      <Modal open={modalOpen} close={closeModal} header="티켓팅 연습하기">
      <div>
          <div>
              <p>난이도</p>
              <label><input type="radio" name="난이도" />상</label>
              <label><input type="radio" name="난이도" />하</label>
              <hr/>
              <p>좌석 형태</p>
              <img src="" alt="img1"/>
              <img src="" alt="img2"/>
          </div>
      </div>
      </Modal>
      <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
        <div className="infor">
          <Timer clickValue={click} />
          <MouseSpeed onMouseDownClick={downClick} onMouseUpClick={upClick}/>
        </div>
        <button id="seat" onClick={checkSeat} onMouseDown={checkSeatDown} onMouseUp={checkSeatUp}>좌석 배치도</button>
      </OrangeContainer>
    </>
  );
};

export default Ticketing;