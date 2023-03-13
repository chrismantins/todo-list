import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.gray500};
    color: ${(props) => props.theme.gray300};
    -webkit-font-smoothin: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
