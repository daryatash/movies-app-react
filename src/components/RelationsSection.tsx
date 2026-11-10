import { useParams } from "react-router"
import { getFilmRelations } from "../api/films"
import { useFetch } from "../hooks/useFetch"
import Section from "./Section"
import AsyncState from "./AsyncState"
import CardsList from "./CardsList"

const ALLOWED_RELATIONS_TYPES = new Set([
  'SEQUEL',
  'SPOOFED',
  'PREQUEL',
  'EDITED_INTO',
  'SPIN_OFF'
])

export default function RelationsSection() {
  const { id } = useParams()

  const {
    data: relations,
    loading,
    error,
    onRetry
  } = useFetch(() => {
    if (!id) throw new Error("Нет id фильма")
    return getFilmRelations(id)
  }, [id])

  const filteredRelations = relations?.items.filter(item => ALLOWED_RELATIONS_TYPES.has(item.relationType)) ?? []

  return (
      <Section title="Связанное">
        <AsyncState error={error} loading={loading} empty={filteredRelations.length === 0} onRetry={onRetry}>
          <CardsList films={filteredRelations} variant="row" />
        </AsyncState>
      </Section>
  )
}