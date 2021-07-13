import { RepositoryItem } from "./RepositoryItem";
import { useState } from "react";
import '../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link:"https://github.com/unform"
}

//https://api.github.com/users/gabrielmerigo/repos

export function RepositoryList() {
  const [repos, setRepos] = useState([])


  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}