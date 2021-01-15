import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
`;
