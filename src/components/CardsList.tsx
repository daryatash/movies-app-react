import type { CardFilm } from "../types"
import Card from "./Card"
import './CardsList.css'

type CardsListProps = {
  films: CardFilm[],
  variant: "row" | "grid"
}

export default function CardsList({films, variant}: CardsListProps) {
  return (
    <ul className={`cards-list cards-list--${variant}`}>
      {films.map((film) => {
        return (
          <Card key={film.kinopoiskId} film={film}/>
        )
      })}
    </ul>
  )
}