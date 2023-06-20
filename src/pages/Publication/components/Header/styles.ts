import { styled } from 'styled-components'

export const PublicationHeaderContainer = styled.section`
  padding: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  .footer {
    display: flex;
    align-items: center;
    gap: 2rem;
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
  }
`
