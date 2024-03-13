import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Favorite } from "../../redux/interfaces";
// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import HeartFavorite from "./heartFavorite";


const FavoriteLabels = () => {
    const favorites = useSelector((state: RootState) => state.book.favorites);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {favorites.map((fav: Favorite) => (
        <div key={fav._id} className="border p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">{fav.title}</h3>  
            <HiOutlineDotsHorizontal className="text-xl text-middasdarkgreen cursor-pointer border rounded-md border-middasgreen p-1"/>
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

export default FavoriteLabels