import { useParams } from "react-router"
import { getFilmSimilars } from "../api/films"
import { useFetch } from "../hooks/useFetch"
import Section from "./Section"
import AsyncState from "./AsyncState"
import CardsList from "./CardsList"

export default function SimilarsSection() {
  const { id } = useParams()

  const {
    data: similarsFilms,
    loading,
    error,
    onRetry
  } = useFetch(() => {
    if (!id) throw new Error("Нет id фильма")
    return getFilmSimilars(id)
  }, [id])

  return (
      <Section title="Похожее">
        <AsyncState error={error} loading={loading} empty={!similarsFilms || similarsFilms.items.length === 0} onRetry={onRetry}>
          <CardsList films={similarsFilms?.items ?? []} variant="row" />
        </AsyncState>
      </Section>
  )
}