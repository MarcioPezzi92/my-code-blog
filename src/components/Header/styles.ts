import { styled } from 'styled-components'
import cover from '../../assets/images/header/header-cover.svg'

export const HeaderContainer = styled.header`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;

  .logo {
    margin-top: 64px;
    margin-bottom: 132px;
    max-width: 148px;
  }
`
