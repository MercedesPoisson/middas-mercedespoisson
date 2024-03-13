import { useDispatch } from "react-redux";
import {
  toggleFavoriteStatus,
  fetchAllBooks,
  fetchAllFavorites,
} from "../../redux/bookSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartFavorite = ({
  isFavorite,
  bookId,
}: {
  isFavorite: boolean;
  bookId: string;
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavoriteStatus(bookId) as any)
      .then(() => {
        dispatch(fetchAllBooks() as any);
        dispatch(fetchAllFavorites() as any);
      })
      .catch((error: any) => {
        console.log("Error al cambiar el estado de favorito: ", error);
      });
  };

  return (
    <div onClick={handleClick}>
      {isFavorite ? (
        <FaHeart className="text-xl text-middasyellow cursor-pointer" />
      ) : (
        <FaRegHeart className="text-xl text-gray-400 cursor-pointer" />
      )}
    </div>
  );
};

export default HeartFavorite;
