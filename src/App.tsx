import { BrowserRouter } from 'react-router'
import AppRouter from './router/AppRouter'
import { FavouritesProvider } from './context/FavouritesContext'

function App() {

  return (
    <FavouritesProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FavouritesProvider>
  )
}

export default App
