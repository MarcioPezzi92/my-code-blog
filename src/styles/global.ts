import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font: 400 1rem Nunito, sans-serif;
  }

  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
  }
`
