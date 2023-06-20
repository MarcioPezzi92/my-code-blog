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
    padding-bottom: 4rem;
    background: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, button, p, span {
    font: 400 1rem Nunito, sans-serif;
    color: ${(props) => props.theme['base-text']};
  }

  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
  }

  h1, h2, h3 {
    color: ${(props) => props.theme['base-title']};
  }

  ul {
    list-style: none;
  }
`
