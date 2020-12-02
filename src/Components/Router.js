import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "Routes/Auth";
import Feed from "Routes/Feed";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed}></Route>
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);

const Router = ({ isLoggedIn }) => (
  <HashRouter>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </HashRouter>
);

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Router;
