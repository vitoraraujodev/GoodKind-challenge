import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  
  *:focus {
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  
  body, input, button {
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
  }
`;
