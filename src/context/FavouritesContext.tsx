import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CardFilm } from "../types";

const FavouritesContext = createContext<FavouritesContextValue | null>(null)

type FavouritesContextValue = {
  favourites: CardFilm[],
  add: (film: CardFilm) => void,
  remove: (id: number) => void,
  toggle: (film: CardFilm) => void,
  isFavourite: (id: number) => boolean,
}

type FavouritesProviderProps = {
  children: ReactNode
}

export function FavouritesProvider({ children }: FavouritesProviderProps) {
  const [favourites, setFavourites] = useState<CardFilm[]>(() => {
    try {
      const saved = localStorage.getItem('favourites')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const add = (film: CardFilm) => setFavourites(prev => [...prev, film])
  const remove = (id: number) => setFavourites(prev => prev.filter(f => f.kinopoiskId !== id))
  const toggle = (film: CardFilm) =>
    setFavourites(prev =>
      prev.some(f => f.kinopoiskId === film.kinopoiskId) 
        ? prev.filter(x => x.kinopoiskId !== film.kinopoiskId)
        : [...prev, film]
    )
  const isFavourite = (id: number) => favourites.some(f => f.kinopoiskId === id) 

  useEffect(() => {
    try {
      localStorage.setItem('favourites', JSON.stringify(favourites))
    } catch {

    }
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, add, remove, toggle, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  const context = useContext(FavouritesContext)
  if (!context) throw new Error("useFavorites может быть использован только в FavoritesProvider")
  return context
}