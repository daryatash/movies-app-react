import type { ReactNode } from "react"
import ErrorState from "./ErrorState"

type AsyncStateProps = {
  error: Error | null,
  loading: boolean,
  empty: boolean,
  onRetry: () => void,
  children: ReactNode
}

export default function AsyncState({ error, loading, empty, onRetry, children }: AsyncStateProps) {
  if (loading) {
    return <div className="async-state">
      <span>Загрузка...</span>
    </div>
  }

  if (error) {
    return <ErrorState message={error.message} onRetry={onRetry} />
  }

  if (empty) {
    return <div className="async-state">
      <span>Ничего не найдено</span>
    </div>
  }

  return children
}