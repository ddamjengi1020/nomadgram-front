import { ThemeProvider } from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "Styles/GlobalStyles";
import Theme from "Styles/Theme";
import Router from "./Router";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;
const ME = gql`
  {
    me {
      id
      userName
    }
  }
`;

const App = () => {
  const { data } = useQuery(QUERY);
  const { data: meData } = useQuery(ME);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router isLoggedIn={data?.isLoggedIn} loggedUser={meData} />
      <Footer />
      <ToastContainer
        position={"bottom-left"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        style={{ fontSize: 14 }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
};

export default App;
