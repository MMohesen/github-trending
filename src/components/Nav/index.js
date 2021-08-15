import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

/**
 * App Nav Bar
 */
const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="header">
            <h1 className="header-title">Trending</h1>
            <p className="header-description">
              See what the GitHub community is most excited about today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NavBar);
