import './styles/global.scss';
import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';

export default function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}