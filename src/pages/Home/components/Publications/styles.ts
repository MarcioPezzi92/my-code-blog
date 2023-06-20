import { styled } from 'styled-components'

export const PublicationsContainer = styled.section``

export const PublicationsHeader = styled.div`
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
export const PublicationsList = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
export const PublicationCard = styled.li`
  padding: 2rem;
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    h3 {
      max-width: 260px;
      font-size: 18px;
    }
    span {
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }
  p {
    margin-top: 1.25rem;
    width: 100%;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
