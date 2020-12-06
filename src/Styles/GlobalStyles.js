import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
  ${reset}
  html {
    font-family: 'Open Sans', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.blackColor};
  }
  a {
    color:${(props) => props.theme.blueColor};
    text-decoration:none;
  }
`;
