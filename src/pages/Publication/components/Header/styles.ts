import { styled } from 'styled-components'

export const PublicationHeaderContainer = styled.section`
  padding: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h1 {
    margin: 20px 0 12px 0;
  }

  .footer {
    display: flex;
    gap: 2rem;
    div {
      display: flex;
      gap: 8px;
      img {
        width: 18px;
      }
    }
  }
`
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 12px;
    }
  }
`
