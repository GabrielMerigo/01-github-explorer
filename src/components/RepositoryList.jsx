import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link:"https://github.com/unform"
}

const usuarios = ['gabriel', 'diego', 'jorge']
usuarios.push('rafacamarda')

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}