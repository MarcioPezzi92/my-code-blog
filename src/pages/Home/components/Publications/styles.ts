import { styled } from 'styled-components'

export const PublicationsList = styled.ul`
  margin-top: 2rem;
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
