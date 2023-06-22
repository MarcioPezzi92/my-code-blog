import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { PublicationsProvider } from './contexts/PublicationsContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <PublicationsProvider>
          <Router />
        </PublicationsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
