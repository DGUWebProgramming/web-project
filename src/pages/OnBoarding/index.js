import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";
import "./index.css";

const OnBoarding = () => {
  return (
    <>
      <div>온보딩</div>
      <Link to="/main" style={{ textDecoration: "none" }}>
        <Button styleClass="basic">시작해볼까요?</Button>
      </Link>
    </>
  );
};

export default OnBoarding;
