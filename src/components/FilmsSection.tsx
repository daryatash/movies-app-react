import { getAllFilms } from "../api/films"
import { useFetch } from "../hooks/useFetch"
import AsyncState from "./AsyncState"
import CardsList from "./CardsList"
import Section from "./Section"

export default function FilmsSection() {
  const {
    data: films,
    loading,
    error,
    onRetry
    } = useFetch(getAllFilms)
  
  return (
    <Section title="Все фильмы" linkTo="/catalog" linkText="Смотреть все">
      <AsyncState error={error} loading={loading} empty={!films || films.items.length === 0} onRetry={onRetry}>
        <CardsList films={films?.items ?? []} variant="row" />
      </AsyncState>
    </Section>
  )
}