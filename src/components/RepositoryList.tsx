import { FormEvent, useContext, useState } from "react"; 
import '../styles/repositories.scss';
import { AuthContext } from '../../contexts/AuthContexts';

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <section className="repository-list">
      <h1>Formulário</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}