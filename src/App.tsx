import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { PublicationsProvider } from './contexts/PublicationsContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PublicationsProvider>
        <Home />
      </PublicationsProvider>
    </ThemeProvider>
  )
}

export default App
