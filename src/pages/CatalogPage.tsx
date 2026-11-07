import { getAllFilms } from "../api/films"
import AsyncState from "../components/AsyncState"
import CardsList from "../components/CardsList"
import { useFetch } from "../hooks/useFetch"

function CatalogPage() {
  const {
    data: films,
    loading,
    error,
    onRetry
  } = useFetch(getAllFilms)

  return (
    <>
      <h1>Каталог</h1>
      <AsyncState 
        loading={loading} 
        error={error} 
        empty={!films || films.items.length === 0}
        onRetry={onRetry}
      >
        <CardsList films={films?.items ?? []} variant="grid"/>
      </AsyncState>
    </>
  )
}

export default CatalogPage