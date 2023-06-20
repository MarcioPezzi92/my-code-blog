import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -5.5rem;

    & > * {
      max-width: 864px;
    }
  }
`
