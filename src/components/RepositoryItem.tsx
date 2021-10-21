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
    <h1>
    
    </h1>
  );
}