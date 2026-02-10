import Router from '../pages/Router'
import NotesPage from '../pages/NotesPage'
import NotePage from '../pages/NotePage'
import './global.scss'
import { NotesProvider } from '../shared/model/context/NotesProvider'
import Footer from '../shared/ui/footer/Footer'

export const App = () => {
  const routes = {
    '/': NotesPage,
    '/notes/:id': NotePage,
    '*': () => <div><h1>404 Page not found!</h1></div>
  }

  return (
    <NotesProvider>
      <Router routes={routes}/>
    </NotesProvider>
  )
}

export default App