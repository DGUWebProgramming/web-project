import React from "react";
import "./index.css";

const Text = ({ styleClass, onClick, children }) => {
  return (
    <button className={styleClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Text;
