import './styles/global.scss';
import { Home } from './components/RepositoryList';
import { AuthProvider } from '../contexts/AuthContexts'

export default function App() {
  return (
    <AuthProvider>
      <Home /> 
    </AuthProvider>
  )
}