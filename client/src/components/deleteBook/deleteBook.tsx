import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  deleteBook,
  fetchAllBooks,
  fetchAllFavorites,
} from "../../redux/bookSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBook = ({ bookId }: { bookId: string }) => {
  const dispatch = useDispatch();

  const handleDeleteConfirmation = () => {
    swal({
      title: "¿Estás seguro que querés eliminar el libro?",
      text: "Una vez eliminado, no podrás recuperarlo.",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBook(bookId) as any)
          .then(() => {
            dispatch(fetchAllBooks() as any);
            dispatch(fetchAllFavorites() as any);
          })
          .catch((error: any) => {
            console.log("Error al intentar borrar el libro: ", error);
          });
        swal("¡Poof! ¡Tu libro ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("¡Tu libro está a salvo!");
      }
    });
  };

  return (
    <span onClick={handleDeleteConfirmation}>
      <FaRegTrashAlt className="text-2xl text-middasnotblack cursor-pointer p-1" />
    </span>
  );
};

export default DeleteBook;