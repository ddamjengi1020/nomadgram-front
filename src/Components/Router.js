import PropTypes from "prop-types";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "Routes/Auth";
import Feed from "Routes/Feed";
import Header from "./Header";

const Container = styled.main`
  max-width: ${(props) => props.theme.maxFeedWidth};
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
`;
const LoggedInRoutes = () => <Route exact path="/" component={Feed}></Route>;

const LoggedOutRoutes = () => <Route exact path="/" component={Auth}></Route>;

const Router = ({ isLoggedIn }) => (
  <HashRouter>
    <Header />
    <Switch>
      <Container>
        {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
      </Container>
    </Switch>
  </HashRouter>
);

Router.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Router;
