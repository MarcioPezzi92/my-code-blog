import { HeaderContainer } from './styles'
import logo from '../../assets/images/header/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img className="logo" src={logo} alt="logo" />
    </HeaderContainer>
  )
}
