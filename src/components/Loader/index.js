import React from "react";
import "./styles.scss";

const Loader = ({ className = "" }) => {
  return (
    <div className={`app-small-loader-overlay ${className}`}>
      <div className="loader" />
    </div>
  );
};

export default Loader;
