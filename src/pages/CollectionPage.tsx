import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"
import { getCollectionFilms } from "../api/films"
import { getCollectionTitle } from "../utils"
import AsyncState from "../components/AsyncState"
import CardsList from "../components/CardsList"

export default function CollectionPage() {
  const { type } = useParams()

  const { data: collectionFilms, loading, error, onRetry } = useFetch(
    () => {
      if (!type) throw new Error("Нет типа коллекции")
      return getCollectionFilms(type)
    },
    [type]
  )

  return (
    <>
      <h1>{getCollectionTitle(type)}</h1>
      <AsyncState 
        loading={loading} 
        error={error} 
        empty={!collectionFilms || collectionFilms.items.length === 0}
        onRetry={onRetry}
      >
        <CardsList films={collectionFilms?.items ?? []} variant="grid"/>
      </AsyncState>
    </>
  )
}