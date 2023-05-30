import React from "react";

import { Text } from "../../components";

import logo from "../../asset/images/text-logo.svg";
import "./index.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <img className="notfound-logo" src={logo} alt={"logo"} />
      <Text styleClass={"text4"}>페이지가 존재하지 않습니다.</Text>
      <div>링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.</div>
    </div>
  );
};

export default NotFound;
