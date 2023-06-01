import React from "react";
import "./index.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import 좌석1 from "../../asset/images/좌석1.png";
import 좌석2 from "../../asset/images/좌석2.png";
const Modal = () => {

  const [modalOpen, setModalOpen] = useState(true);
  const wrapperRef = useRef();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);


 
  return (
    <div className={modalOpen ? 'openModal modal' : 'modal'}>
      {modalOpen ? (
        <section  ref={wrapperRef}>
          <header>
            티켓팅 연습하기
            <button className="close" onClick={() => setModalOpen(false)}>
              &times;
            </button>
          </header>
          <main>
          <div id="modal_content">
              <div>
                  <p>난이도</p>
                  <div id="div_난이도">
                    <div>
                      <div>
                        <input id="상" type="radio" name="난이도" value="상" />
                        <label for="상">상</label>
                      </div>
                    </div>
                    <div>
                      <div>
                        <input id="하" type="radio" name="난이도" value="하"/>
                        <label for="하">하</label>
                      </div>
                    </div>
                  </div>

                  <hr/>
              </div>

              <div>
                  <p>좌석 형태</p>
                  <img className="seatImg" src={좌석1} alt="img1"/>
                  <img className="seatImg" src={좌석2} alt="img2"/>
              </div>
              <button id="startBtn">시작하기</button>
          </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;