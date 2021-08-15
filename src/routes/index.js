import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainRoute from "./main-route";


/**
 * Router Class
 */
class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mapStateToProps = ({ user, app }) => {
  return {
    user,
    app,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
