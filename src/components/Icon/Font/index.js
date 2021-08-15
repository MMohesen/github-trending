import React from "react";

const FIcon = ({ name = "", size = "1.5rem", color = "#000", className = "", ...reset }) => {
  return (
    <>
      <span
        {...reset}
        className={`app-font-icon icon-${name} ${className}`}
        style={{ fontSize: size, color: color }}
        color={color}
      />
    </>
  );
};

export default FIcon;
