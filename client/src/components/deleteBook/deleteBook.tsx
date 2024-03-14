import { useDispatch } from "react-redux";
import {
  deleteBook,
  fetchAllBooks,
  fetchAllFavorites,
} from "../../redux/bookSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBook = ({ bookId }: { bookId: string }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(bookId) as any)
      .then(() => {
        dispatch(fetchAllBooks() as any);
        dispatch(fetchAllFavorites() as any);
      })
      .catch((error: any) => {
        console.log("Error al intentar borrar el libro: ", error);
      });
  };

  return (
    <span onClick={handleClick}>
      <FaRegTrashAlt className="text-2xl text-middasnotblack cursor-pointer p-1" />
    </span>
  );
};

export default DeleteBook;
