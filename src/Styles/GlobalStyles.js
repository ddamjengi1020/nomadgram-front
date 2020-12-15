import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
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
  input:focus {
    outline: none;
  }
`;
