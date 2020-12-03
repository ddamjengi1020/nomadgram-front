import React from "react";
import Router from "./Router";
import Theme from "Styles/Theme";
import GlobalStyles from "Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const App = () => {
  const { data } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router isLoggedIn={data?.isLoggedIn} />
    </ThemeProvider>
  );
};

export default App;
