import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const List = ({ children }) => {
  return (
    <div className="list">
      <div className="list-header">
        <NavLink to={"/repositories"} activeClassName={"active"}>
          Repositories
        </NavLink>
        <NavLink to={"/developers"} activeClassName={"active"}>
          Developers
        </NavLink>
      </div>

      <div className="list-items">{children}</div>
    </div>
  );
};

export default List;
