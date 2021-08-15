import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { Footer, Loader, Nav } from "../components/index";
import routes from "../routes/router";

const MainRoute = ({ app }) => {
  return (
    <div className="app-content">
      <Nav />
      <Suspense fallback={<Loader />}>
        <main className="main-container">
          <Switch>
            {routes.map(({ component: Component, ...reset }) => (
              <Route {...reset} render={(routeProps) => <Component {...routeProps} />} />
            ))}
          </Switch>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

const mapStateToProps = ({ app }) => {
  return {
    app,
  };
};

export default connect(mapStateToProps)(withRouter(MainRoute));
