import { styled } from 'styled-components'

export const ArticleContainer = styled.article`
  width: 100%;
  padding: 1.5rem;
  p {
    margin: 0.5rem 0;
  }
  pre {
    margin: 1.5rem 0;
    code {
      padding: 0.5rem 0.8rem;
      border-radius: 0.5rem;
    }
  }
  ol,
  ul {
    list-style: square;
    list-style-position: inside;
  }
`
