import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { OrangeContainer, Timer, MouseSpeed, SeatButton, Modal } from "../../components";

import "./index.css";
import stageImage from "../../asset/images/Stage_image.png";

const Ticketing = () => {
  // 클릭시 마우스 정보
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);
  // 버튼 disabled 상태 정보
  const [disable_A, setDisable_A] = useState(Array(60).fill(null));
  const [disable_B, setDisable_B] = useState(Array(60).fill(null));
  const [disable_C, setDisable_C] = useState(Array(60).fill(null));
  const [disable_D, setDisable_D] = useState(Array(60).fill(null));
  const [disable_E, setDisable_E] = useState(Array(60).fill(null));
  const [disable_F, setDisable_F] = useState(Array(60).fill(null));
  const [disable_G, setDisable_G] = useState(Array(60).fill(null));
  // 모달창
  const [modalOpen, setModalOpen] = useState(false);

  //vip석
  useEffect(() => {
    const id = setInterval(() => {
      const index_random = [];
      for(var i=0; i<2; i++){
        index_random.push(Math.floor(Math.random() * 60));
      }
      const B = [...disable_B];
      B[index_random[0]] = true;
      setDisable_B(B);
      const C= [...disable_C];
      C[index_random[1]] = true;
      setDisable_C(C);
    }, 10);
    if (click) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [disable_B]);

  //R석
  useEffect(() => {
    const id = setInterval(() => {
      const index_random = [];
      for(var i=0; i<2; i++){
        index_random.push(Math.floor(Math.random() * 60));
        
      }
      const A = [...disable_A];
      A[index_random[0]] = true;
      setDisable_A(A);
      const D = [...disable_D];
      D[index_random[1]] = true;
      setDisable_D(D);
    }, 50);
    if (click) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [disable_D]);

  // 2층
  useEffect(() => {
    const id = setInterval(() => {
      const index_random = [];
      for(var i=0; i<3; i++){
        index_random.push(Math.floor(Math.random() * 60));
      }
      const E = [...disable_E];
      E[index_random[0]] = true;
      setDisable_E(E);
      const F = [...disable_F];
      F[index_random[1]] = true;
      setDisable_F(F);
      const G = [...disable_G];
      G[index_random[2]] = true;
      setDisable_G(G);
    }, 100);
    if (click) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [disable_F]);

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
            <input id="하" type="radio" name="난이도" value="하" />
            <label for="하">하</label>
            <hr />
          </div>

          <div>
            <p>좌석 형태</p>
            <img src="" alt="img1" />
            <img src="" alt="img2" />
          </div>
          <button id="startBtn">시작하기</button>
        </div>
      </Modal>
      <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
        <div className="infor">
          <Timer clickValue={click} />
          <MouseSpeed onMouseDownClick={downClick} onMouseUpClick={upClick} />
        </div>
        <div className="seatContainer">
          <img className="stage_image" src={stageImage} alt={"stage 공간"}/>
          <div className="seatBox A">
            {disable_A.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_A[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
          <div className="seatBox B">
            {disable_B.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_B[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
          <div className="seatBox C">
            {disable_C.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_C[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
          <div className="seatBox D">
            {disable_D.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_D[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
          <div className="seatBox E">
            {disable_E.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_E[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
          <div className="seatBox F">
            {disable_F.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_F[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
          <div className="seatBox G">
            {disable_G.map((_, index) => (
              <SeatButton
                key={index}
                styleClass="SeatBtn"
                disabledButton={disable_G[index]}
                onclick={() => handleSeatClick(index)} // 클릭 이벤트 핸들러에 함수 전달
                onmouseDown={handleSeatMouseDown} // 마우스 다운 이벤트 핸들러에 함수 전달
                onmouseUp={handleSeatMouseUp} // 마우스 업 이벤트 핸들러에 함수 전달
              ></SeatButton>
            ))}
          </div>
        </div>
      </OrangeContainer>
    </>
  );
};

export default Ticketing;