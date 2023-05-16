import React from "react";
import "./index.css";

const Button = ({ styleClass, onClick, children }) => {
  return (
    <button className={styleClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
