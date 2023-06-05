import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { clickCountByDateAtom } from "../../state";

import "./index.css";

const ResultModal = ({ clickValue, disableValue, mode }) => {
  let result;
  const [isVisible, setIsVisible] = useState(true);
  const [clickCountByDate, setClickCountByDate] =
    useRecoilState(clickCountByDateAtom);

  if (clickValue) {
    result = "성공";
  } else if (disableValue) {
    result = "실패";
  } else {
    result = "실패";
  }

  const reset = () => {
    save();
    window.location.reload();
  };

  const hideComponent = () => {
    setIsVisible(false);
  };

  const save = () => {
    if (clickValue) {
      const fetchData = async () => {
        try {
          await getClickCountByDateFromLocalStorage();
          update();
        } catch (error) {
          console.error("Error fetching data from local storage:", error);
        }
      };
      fetchData();
    }
  };
  const update = () => {
    const currentDate = new Date();
    const today = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    setClickCountByDate((prevClickCountByDate) => {
      const updatedClickCountByDate = { ...prevClickCountByDate };
      if (updatedClickCountByDate.hasOwnProperty(today)) {
        updatedClickCountByDate[today] = {
          ...updatedClickCountByDate[today],
          [mode]: (updatedClickCountByDate[today]?.[mode] || 0) + 1,
        };
      } else {
        updatedClickCountByDate[today] = { 상: 0, 하: 0 };
        updatedClickCountByDate[today][mode] = 1;
      }
      saveClickCountByDateToLocalStorage(updatedClickCountByDate);
      return updatedClickCountByDate;
    });
  };

  // 로컬 스토리지에서 데이터 가져오기 (비동기)
  const getClickCountByDateFromLocalStorage = () => {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem("clickCountByDate");
        const parsedData = JSON.parse(data) || {};
        resolve(parsedData);
      } catch (error) {
        reject(error);
      }
    });
  };

  // 로컬 스토리지에 데이터 저장하기 (비동기)
  const saveClickCountByDateToLocalStorage = (data) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem("clickCountByDate", JSON.stringify(data));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <>
      {isVisible && (
        <div className="modalBox">
          <p className="content1">
            결과 발표{" "}
            <button className="X_btn" onClick={hideComponent}>
              X
            </button>
          </p>
          <p className="content2">
            {result}하셨습니다
            <br />
            결과 통계를 확인하시겠습니까?
          </p>
          <div className="btnGroup">
            <Link to="/overview">
              <button className="modalBtn ok" onClick={save}>
                확인
              </button>
            </Link>
            <button className="modalBtn again" onClick={reset}>
              재도전
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultModal;
