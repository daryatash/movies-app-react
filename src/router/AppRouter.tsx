import { Route, Routes } from "react-router"
import AppLayout from "../components/AppLayout"
import HomePage from "../pages/HomePage"
import CatalogPage from "../pages/CatalogPage"
import CollectionPage from "../pages/CollectionPage"
import FavouritesPage from "../pages/FavoritesPage"
import FilmPage from "../pages/FilmPage"
import PersonPage from "../pages/PersonPage"
import SearchPage from "../pages/SearchPage"
import NotFoundPage from "../pages/NotFoundPage"

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/collection/:type" element={<CollectionPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/person/:id" element={<PersonPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}