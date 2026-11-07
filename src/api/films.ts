import type { Film, FilmsList } from "../types"

const BASE_URL = 'https://movies-proxy-daryatash.netlify.app/.netlify/functions/kinopoisk'

export async function getAllFilms(): Promise<FilmsList> {
  const result = await fetch(`${BASE_URL}/api/v2.2/films?page=1`)
  if (!result.ok) {
    if (result.status === 401 || result.status === 403) throw new Error('Нет доступа к API')
    if (result.status === 429) throw new Error('Слишком много запросов, попробуйте позже')
    if (result.status >= 500) throw new Error('Сервер API временно недоступен')
    throw new Error(`Ошибка запроса: ${result.status}`)
  }
  const json = await result.json()
  return json
}

export async function getCollectionFilms(type: string): Promise<FilmsList> {
  const result = await fetch(`${BASE_URL}/api/v2.2/films/collections?type=${type}&page=1`)
  if (!result.ok) {
    if (result.status === 401 || result.status === 403) throw new Error('Нет доступа к API')
    if (result.status === 429) throw new Error('Слишком много запросов, попробуйте позже')
    if (result.status >= 500) throw new Error('Сервер API временно недоступен')
    throw new Error(`Ошибка запроса: ${result.status}`)
  }
  const json = await result.json()
  return json
}


export async function getFilmById(id: string): Promise<Film> {
  const result = await fetch(`${BASE_URL}/api/v2.2/films/${id}`)
  if (!result.ok) {
    if (result.status === 401 || result.status === 403) throw new Error('Нет доступа к API')
    if (result.status === 429) throw new Error('Слишком много запросов, попробуйте позже')
    if (result.status >= 500) throw new Error('Сервер API временно недоступен')
    throw new Error(`Ошибка запроса: ${result.status}`)
  }
  const json = await result.json()
  return json
}