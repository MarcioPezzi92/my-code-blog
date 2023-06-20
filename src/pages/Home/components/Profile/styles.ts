import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  padding: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 32px;
`
export const Photo = styled.img`
  max-width: 148px;
  border-radius: 8px;
`
export const OwnerInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .description {
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        line-height: 130%;
      }
      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        span {
          font-weight: 700;
          font-size: 12px;
          color: ${(props) => props.theme.blue};
        }
        img {
          width: 11.25px;
        }
      }
    }
    p {
      margin-top: 8px;
      line-height: 160%;
    }
  }

  .footer {
    display: flex;
    gap: 1.5rem;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      img {
        width: 18px;
      }
    }
  }
`
