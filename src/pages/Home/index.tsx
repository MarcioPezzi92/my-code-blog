import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <div>
      <Profile />
      <SearchForm />
      <Publications />
    </div>
  )
}
