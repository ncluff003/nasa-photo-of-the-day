import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: MADE Tommy Soft;
  src: url('./MADE Tommy Soft Regular PERSONAL USE.otf');
}
@font-face {
  font-family: MADE Tommy Soft Medium;
  src: url('./MADE Tommy Soft Medium PERSONAL USE.otf');
}
@font-face {
  font-family: MADE Tommy Soft Bold;
  src: url('./MADE Tommy Soft Bold PERSONAL USE.otf');
}
@font-face {
  font-family: MADE Tommy Soft Extra Bold;
  src: url('./MADE Tommy Soft ExtraBold PERSONAL USE.otf');
}

  *,
  *::before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font: inherit;
    vertical-align: baseline;
    font-family: MADE Tommy Soft;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    position: relative;
    height: 100%;
    width: 100vw;
    background-color: #222222;
    overflow-x: hidden;
  }

`;
