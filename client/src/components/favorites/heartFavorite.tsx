import { useDispatch } from "react-redux";
import { toggleFavoriteStatus, fetchAllBooks, fetchAllFavorites } from "../../redux/bookSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartFavorite = ({ isFavorite, bookId }: { isFavorite: boolean, bookId: string }) => {
    const dispatch = useDispatch();
  
    const handleClick = () => {
        dispatch(toggleFavoriteStatus(bookId) as any)
        .then(() => {
            dispatch(fetchAllBooks() as any);
            dispatch(fetchAllFavorites() as any)
        })
        .catch((error: any) => {
            console.log("Error al cambiar el estado de favorito: ", error);
        });
    };
  
    return (
        <div onClick={handleClick}>
            {isFavorite ? (
                <FaHeart className="h-6 w-6 text-middasyellow"/>
            ) : (
                <FaRegHeart className="h-6 w-6 text-middasyellow"/>
            )}
        </div>
    );
};

export default HeartFavorite;