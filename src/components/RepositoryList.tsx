import { RepositoryItem, Repository } from "./RepositoryItem";
import { useState, useEffect } from "react"; 
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielmerigo/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repos.map(repo => {
          return <RepositoryItem key={repo.id} repository={repo} />
        })}
      </ul>
    </section>
  )
}