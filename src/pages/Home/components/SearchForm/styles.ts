import { styled } from 'styled-components'

export const SearchFormContainer = styled.section`
  margin-top: 2rem;
`

export const PublicationsHeader = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 18px;
  }
`

export const SearchBar = styled.input`
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  width: 100%;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  font-family: Nunito, sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
