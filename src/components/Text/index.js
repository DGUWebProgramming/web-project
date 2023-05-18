import React from "react";
import "./index.css";

const Text = ({styleClass, children}) => {
  return (
    <p className={styleClass}>{children}</p>
  )
};

export default Text;
