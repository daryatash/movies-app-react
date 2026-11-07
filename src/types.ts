export type FilmsList = {
  total: number,
  totalPages: number,
  items: FilmsItem[]
}

export type FilmsItem = {
  kinopoiskId: number,
  nameRu: string | null,
  nameOriginal: string | null,
  posterUrl: string,
  ratingKinopoisk: number | null,
  ratingImdb: number | null,
  year: number | null,
  type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL',
  countries: Country[] | null,
  genres: Genre[] | null,
}

export type Film = {
  kinopoiskId: number,
  nameRu: string | null,
  nameOriginal: string | null,
  posterUrl: string,
  ratingKinopoisk: number | null,
  ratingImdb: number | null,
  webUrl: string | null,
  year: number | null,
  filmLength: number | null,
  slogan: string | null,
  description: string | null,
  shortDescription: string | null,
  editorAnnotation: string | null,
  type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'VIDEO',
  countries: Country[] | null,
  genres: Genre[] | null,
  ratingAgeLimits: string | null,
  ratingMpaa: string | null,
  startYear: number | null,
  endYear: number | null,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean,
}

type Country = {
  country: string,
}

type Genre = {
  genre: string,
}