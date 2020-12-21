import PropTypes from "prop-types";
import styled from "styled-components";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Auth from "Routes/Auth";
import Feed from "Routes/Feed";
import Explore from "Routes/Explore";
import Profile from "Routes/Profile";
import Search from "Routes/Search";

const Container = styled.main`
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  padding-top: ${(props) => (props.isLoggedIn ? "80px" : "0")};
  margin: 0 auto;
`;
const LoggedInRoutes = ({ loggedUser }) => (
  <>
    <Header loggedUser={loggedUser} />
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Feed loggedUser={loggedUser} />}
      />
      <Route path="/explore" component={Explore} />
      <Route path="/search" component={Search} />
      <Route path="/:username" component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

const Router = ({ isLoggedIn, loggedUser }) => (
  <HashRouter>
    <Container isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <LoggedInRoutes loggedUser={loggedUser} />
      ) : (
        <LoggedOutRoutes />
      )}
    </Container>
  </HashRouter>
);

Router.propTypes = {
  isLoggedIn: PropTypes.bool,
  loggedUser: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    })
  ),
};

export default Router;
