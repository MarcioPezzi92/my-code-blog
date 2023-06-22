import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { PublicationPage } from './pages/Publication'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="publication/:publicationNumber"
          element={<PublicationPage />}
        />
      </Route>
    </Routes>
  )
}
