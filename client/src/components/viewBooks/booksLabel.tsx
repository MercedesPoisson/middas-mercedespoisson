import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../../redux/interfaces";
// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import HeartFavorite from "../favorites/heartFavorite";

const BooksLabel = () => {
  const books = useSelector((state: RootState) => state.book.books);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {books.map((book: Book) => (
        <div key={book._id} className="border p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">{book.title}</h3>  
            <HiOutlineDotsHorizontal className="text-xl text-middasdarkgreen cursor-pointer border rounded-md border-middasgreen p-1"/>
          </div>

          <p className="italic">{book.author}</p>
          <p>Año: {book.year}</p>
          <p>Género: {book.genre}</p>
          <p className="text-middasgreen text-xl">
          <HeartFavorite isFavorite={book.isFavorite} bookId={book._id} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default BooksLabel;
