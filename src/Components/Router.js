import PropTypes from "prop-types";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Auth from "Routes/Auth";
import Feed from "Routes/Feed";
import Explore from "Routes/Explore";
import Profile from "Routes/Profile";
import Search from "Routes/Search";

const Container = styled.main`
  max-width: ${(props) => props.theme.maxFeedWidth};
  width: 100%;
  padding: ${(props) => (props.isLoggedIn ? "80px 0" : "0")};
  margin: 0 auto;
`;
const LoggedInRoutes = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/explore" component={Explore} />
      <Route path="/search" component={Search} />
      <Route path="/:username" component={Profile} />
    </Switch>
  </>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

const Router = ({ isLoggedIn }) => (
  <HashRouter>
    <Container isLoggedIn={isLoggedIn}>
      {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </Container>
  </HashRouter>
);

Router.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Router;
