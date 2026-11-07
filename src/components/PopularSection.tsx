import { getCollectionFilms } from "../api/films"
import { useFetch } from "../hooks/useFetch"
import { getCollectionTitle } from "../utils"
import AsyncState from "./AsyncState"
import CardsList from "./CardsList"
import Section from "./Section"

const COLLECTION_TYPE = "TOP_POPULAR_ALL"

export default function PopularSection() {
  const {
    data: popularFilms,
    loading,
    error,
    onRetry
  } = useFetch(() => getCollectionFilms(COLLECTION_TYPE), [COLLECTION_TYPE])
  
  return (
    <Section title={getCollectionTitle(COLLECTION_TYPE)} linkTo={`/collection/${COLLECTION_TYPE}`} linkText="Смотреть все">
      <AsyncState error={error} loading={loading} empty={!popularFilms || popularFilms.items.length === 0} onRetry={onRetry}>
        <CardsList films={popularFilms?.items ?? []} variant="row" />
      </AsyncState>
    </Section>
  )
}