import React from "react";
import "./index.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import 좌석1 from "../../asset/images/좌석1.png";
import 좌석2 from "../../asset/images/좌석2.png";
const Modal = (props) => {

  const [modalOpen, setModalOpen] = useState(true);
  const wrapperRef = useRef();
  const [selectedSetting, setSelectedSetting] = useState('');

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
    
  const handleSubmit = (e) => {
    if (document.querySelector('input[name="난이도"]:checked') === null) {
      alert('난이도를 선택해주세요.');
      return;
    }
    if (selectedSetting === '') {
      alert('좌석 형태를 선택해주세요.');
      return;
    }
    const selectedDifficulty = document.querySelector('input[name="난이도"]:checked').value;
    props.updateDifficulty(selectedDifficulty);
    props.updateSetting(selectedSetting);
    setModalOpen(false);
  };



 
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
                  <img
                    className={`seatImg ${selectedSetting === 'setting_A' ? 'selected' : ''}`}
                    src={좌석1}
                    alt="img1"
                    onClick={()=>{setSelectedSetting('setting_A')}}
                  />
                  <img
                    className={`seatImg ${selectedSetting === 'setting_B' ? 'selected' : ''}`}
                    src={좌석2}
                    alt="img2"
                    onClick={()=>{setSelectedSetting('setting_B')}}
                  />
              </div>
              <button id="startBtn" onClick={handleSubmit}>시작하기</button>
          </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;