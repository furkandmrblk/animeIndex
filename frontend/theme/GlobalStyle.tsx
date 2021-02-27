import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;

    h1,h2,h3,h4,h5,h6, p {
      margin: 0;
    }

  }
`;

export default GlobalStyle;
