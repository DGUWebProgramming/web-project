import { Link } from "react-router-dom";

import "./index.css";

const ResultModal = ({ clickValue, disableValue }) => {
  let result;

  if (clickValue) {
    result = "성공";
  }
  else if (disableValue) {
    result = "실패";
  }
  else{
    result = "실패";
  }

  const reset = () => {
    window.location.reload()
  }

  return (
    <>
      <div className="modalBox">
        <p className="content1">결과 발표 <Link to="/"><button className="X_btn">X</button></Link></p>
        <p className="content2">{result}하셨습니다
        <br />결과 통계를 확인하시겠습니까?</p>
        <div className="btnGroup">
          <Link to="/overview">
            <button className="modalBtn ok" >확인</button>
          </Link>
          <button className="modalBtn again" onClick={reset}>재도전</button>
        </div>
      </div>
    </>
  );
};

export default ResultModal