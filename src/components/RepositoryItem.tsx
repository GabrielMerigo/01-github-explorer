export interface Repository {
  name: string
  description: string
  url: string
  id: number
}

interface RepositoryItemProps {
  repository: Repository
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.url}>
        Acessar Repositórios
      </a>
    </li>
  );
}