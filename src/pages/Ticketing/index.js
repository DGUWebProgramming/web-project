import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { OrangeContainer, Timer, MouseSpeed, SeatButton } from "../../components";
import Modal from "../../components/Modal";

import "./index.css";

const Ticketing = () => {
  // 클릭시 마우스 정보
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);
  // 버튼 disabled 상태 정보
  const [disabledButtons, setDisabledButtons] = useState(Array(400).fill(null));
  // 모달창
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 400);
      const updatedButtons = [...disabledButtons];
      updatedButtons[randomNumber] = true;
      setDisabledButtons(updatedButtons);
    }, 200);
    if (click) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [disabledButtons]);

  const handleSeatClick = (returnValue) => {
    console.log("Seat button clicked with return value:", returnValue);
    setClick(returnValue);
  };

  const handleSeatMouseDown = (returnValue) => {
    console.log("Seat button mouse down with return value:", returnValue);
    setDownClick(returnValue);
  };

  const handleSeatMouseUp = (returnValue) => {
    console.log("Seat button mouse up with return value:", returnValue);
    setUpClick(returnValue);
  };

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
          <div id="modal_content">
              <div>
                  <p>난이도</p>
                  <input id="상" type="radio" name="난이도" value="상" />
                  <label for="상">상</label>
                  <input id="하" type="radio" name="난이도" value="하"/>
                  <label for="하">하</label>
                  <hr/>
              </div>

              <div>
                  <p>좌석 형태</p>
                  <img src="" alt="img1"/>
                  <img src="" alt="img2"/>
              </div>
              <button id="startBtn">시작하기</button>
          </div>
      </Modal>
      <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
        <div className="infor">
          <Timer clickValue={click} />
          <MouseSpeed onMouseDownClick={downClick} onMouseUpClick={upClick} />
        </div>
        <div className="seatBox">
          {disabledButtons.map((_, index) => (
            <SeatButton
              key={index}
              styleClass="SeatBtn"
              disabledButton={disabledButtons[index]}
              onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
              onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
              onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
            ></SeatButton>
          ))}
        </div>
      </OrangeContainer>
    </>
  );
};

export default Ticketing;