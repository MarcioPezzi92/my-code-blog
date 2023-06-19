import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Profile />
    </HomeContainer>
  )
}
