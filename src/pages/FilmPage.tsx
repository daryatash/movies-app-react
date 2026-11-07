import { Link, useLocation, useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"
import { getFilmById } from "../api/films"
import { formatAgeLimit, formatType, getPosterUrl } from "../utils"
import './FilmPage.css'

function FilmPage() {
  const { id } = useParams()

  const {
    data : film,
    loading,
    error,
    onRetry
  } = useFetch(() => {
      if (!id) throw new Error("Нет id фильма")
      return getFilmById(id)
    }, 
    [id]
  )

  const location = useLocation()
  const from = location.state?.from || "/"

  
  if (loading) return <div>Загрузка…</div>
  if (error) return <div>Ошибка: {error.message} <button onClick={onRetry}>Повторить</button></div>
  if (!film) return <div>Фильм не найден</div>

  return (
    <div className="film-page">
      <Link to={from}>Назад</Link>
      <div className="film-page__hero">
        <img
          className="film-page__poster"
          src={getPosterUrl(film.posterUrl)}
          alt={`Постер фильма "${film.nameRu ?? film.nameOriginal}"`}
          width="222"
          height="333"
        />
        <div className="film-page__info">
          <h1 className="film-page__title">{film.nameRu ?? film.nameOriginal}</h1>
          {film.nameOriginal && film.nameOriginal !== film.nameRu &&
            <p className="film-page__original">{film.nameOriginal}</p>
          }
          {film.slogan && <p className="film-page__slogan">«{film.slogan}»</p>}
          <ul className="film-page__meta">
            {film.year && <li>{film.year}</li>}
            {film.filmLength && <li>{film.filmLength} мин</li>}
            {film.countries && film.countries.length > 0 && (
              <li>{film.countries.map(c => c.country).join(", ")}</li>
            )}
            {film.genres && film.genres.length > 0 && (
              <li>{film.genres.map(g => g.genre).join(", ")}</li>
            )}
          </ul>
          <div className="film-page__ratings">
            {film.ratingKinopoisk != null && 
              <span className="film-page__rating">Рейтинг на Кинопоиске: {film.ratingKinopoisk}</span>
            }
            {film.ratingImdb  != null && 
              <span className="film-page__rating">Рейтинг на IMDb: {film.ratingImdb}</span>
            }
          </div>
          {film.webUrl && 
            <a className="film-page__link" href={film.webUrl} target="_blank" rel="noopener noreferrer">
              Открыть на Кинопоиске
            </a>
          }
        </div>
      </div>
      <section className="film-page__description">
        <h2>Описание</h2>
        {film.shortDescription && <p>{film.shortDescription}</p>}
        {film.description && <p>{film.description}</p>}
        {film.editorAnnotation && <p className="film-page__annotation">{film.editorAnnotation}</p>}
      </section>
      <section className="film-page__details">
        <h2>Детали</h2>
        {film.type && <span>Тип: {formatType(film.type)}</span>}
        {film.ratingAgeLimits && <span>Возрастное ограничение: {formatAgeLimit(film.ratingAgeLimits)}+</span>}
        {film.ratingMpaa && <span>Рейтинг MPAA: {film.ratingMpaa.toUpperCase()}</span>}
      </section>
    </div>

  )
}

export default FilmPage