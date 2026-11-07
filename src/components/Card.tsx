import { Link, useLocation } from "react-router"
import { getPosterUrl } from "../utils"
import './Card.css'
import type { FilmsItem } from "../types"

type CardProps = {
  film: FilmsItem
}

export default function Card({film}: CardProps) {
  const location = useLocation()

  return (
    <li className="card">
      <Link 
        to={`/film/${film.kinopoiskId}`} 
        className="card__link"
        state={{ from: location.pathname + location.search }}
      >
        <img 
          src={getPosterUrl(film.posterUrl)}
          className="card__image"
          width="222"
          height="333"
        />
        <div className="card__meta">
          <span className="card__name">{film.nameRu ?? film.nameOriginal}</span>
          {film.year && 
            <span className="card__year">
              <time dateTime={film.year.toString()}>{film.year}</time>
            </span>
          }
        </div>
      </Link>
    </li>
  )
}