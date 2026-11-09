import CardsList from "../components/CardsList"
import { useFavourites } from "../context/FavouritesContext"

function FavouritesPage() {
   const {
      favourites
  } = useFavourites()

  if (favourites.length === 0) return <div>У вас пока нет избранных фильмов</div>

  return (
    <>
      <h1>Избранное</h1>
      <CardsList films={favourites} variant="grid"/>
    </>
  )
}

export default FavouritesPage