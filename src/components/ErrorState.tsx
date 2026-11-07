type ErrorStateProps = {
  message: string,
  onRetry: () => void
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="error">
      <p className="error__title">Ошибка загрузки</p>
      <p className="error__details">{message}</p>
      <button onClick={() => onRetry()}>Повторить</button>
    </div>
  )
}