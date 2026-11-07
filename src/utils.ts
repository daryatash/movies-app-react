import { COLLECTION_TITLES } from "./constants/collection"
import { FILM_TYPES } from "./constants/film"

export function getPosterUrl(url: string): string {
  if (url.includes('no-poster') || url === '') {
    return '/images/no-poster.jpg'
  }
  return url
}

export function formatType(type: string): string {
  if (!type) return ""
  return FILM_TYPES[type] ?? type
}

export function formatAgeLimit(age: string): string {
  return age.replace('age', '')
}

export function getCollectionTitle(type: string | undefined): string {
  if (!type) return "Коллекция"
  return COLLECTION_TITLES[type] ?? "Коллекция"
}