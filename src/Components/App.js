import Router from "./Router";
import Theme from "Styles/Theme";
import GlobalStyles from "Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div``;

const App = () => {
  const { data } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router isLoggedIn={data?.isLoggedIn} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
