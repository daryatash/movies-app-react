import type { Film, FilmRelationsList, FilmsList } from "../types"

const BASE_URL = 'https://movies-proxy-daryatash.netlify.app/.netlify/functions/kinopoisk'

async function fetchJson<T>(url: string): Promise<T> {
  const result = await fetch(url)
  if (!result.ok) {
    if (result.status === 401 || result.status === 403) throw new Error('Нет доступа к API')
    if (result.status === 429) throw new Error('Слишком много запросов, попробуйте позже')
    if (result.status >= 500) throw new Error('Сервер API временно недоступен')
    throw new Error(`Ошибка запроса: ${result.status}`)
  }
  const json = await result.json()
  return json as Promise<T>
}

export async function getAllFilms(): Promise<FilmsList> {
  return fetchJson<FilmsList>(`${BASE_URL}/api/v2.2/films?page=1`)
}

export async function getCollectionFilms(type: string): Promise<FilmsList> {
  return fetchJson<FilmsList>(`${BASE_URL}/api/v2.2/films/collections?type=${type}&page=1`)
}

export async function getFilmById(id: string): Promise<Film> {
  return fetchJson<Film>(`${BASE_URL}/api/v2.2/films/${id}`)
}

export async function getFilmRelations(id: string): Promise<FilmRelationsList> {
  return fetchJson<FilmRelationsList>(`${BASE_URL}/api/v2.2/films/${id}/relations`)
}

export async function getFilmSimilars(id: string): Promise<FilmRelationsList> {
  return fetchJson<FilmRelationsList>(`${BASE_URL}/api/v2.2/films/${id}/similars`)
}