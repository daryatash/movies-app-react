import { useEffect, useState } from "react"

export function useFetch<T>(
  fetchFunction: () => Promise<T>, 
  deps: unknown[] = []
) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [reloadTrigger, setReloadTrigger] = useState(0)
  
  useEffect(() => {
    let cancelled = false
  
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchFunction()
        if (!cancelled) setData(data)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e : new Error(String(e)))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
  
    load()
  
    return () => { cancelled = true }
  // защита от предупреждений линтера
  // fetchFunction намеренно не в зависимостях, т.к. его идентичность меняется каждый рендер,
  // остальные параметры переданы через deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ...deps, reloadTrigger])

  const onRetry = () => {
    setReloadTrigger(a => a + 1)
  }

  return {
    data,
    loading,
    error,
    onRetry
  }
}