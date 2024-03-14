import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Favorite } from "../../redux/interfaces";
import DeleteBook from "../deleteBook/deleteBook";
import HeartFavorite from "./heartFavorite";

const FavoriteLabels = () => {
  const favorites = useSelector((state: RootState) => state.book.favorites);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {favorites.map((fav: Favorite) => (
        <div key={fav._id} className="border p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="uppercase text-sm font-bold">{fav.title}</h3>
            <DeleteBook bookId={fav._id} />
          </div>

          <p className="italic">{fav.author}</p>
          <p>Año: {fav.year}</p>
          <p>Género: {fav.genre}</p>
          <p className="text-middasgreen text-xl">
            <HeartFavorite isFavorite={fav.isFavorite} bookId={fav._id} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteLabels;
