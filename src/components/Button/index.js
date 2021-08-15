import React from "react";
import "./styles.scss";

const Button = ({ title = "", onClick = () => {} }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="button-title">{title}</span>
    </button>
  );
};

export default Button;
