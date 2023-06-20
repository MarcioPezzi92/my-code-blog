import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Profile />
      <Publications />
    </HomeContainer>
  )
}
