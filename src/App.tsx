import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import { UserContextprovider } from './context/UserContext'
import routes from './routes'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <UserContextprovider>
      <Header />
      {elements}
    </UserContextprovider>
  )
}

export default App
