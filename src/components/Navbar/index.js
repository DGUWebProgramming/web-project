import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="header">
        <div id="logo">
            로고
        </div>
        <div id="nav">
            <div><Link to="/">About 무한도전</Link></div>
            <div><Link to="/Main">공연정보</Link></div>
            <div><Link to="/Ticketing">티켓팅 연습</Link></div>
        </div>
    </div>
  )
};

export default Navbar;
