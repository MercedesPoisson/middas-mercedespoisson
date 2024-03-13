import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../../redux/interfaces";
import DeleteBook from "../createBooks/deleteBook";
import HeartFavorite from "../favorites/heartFavorite";


const BooksLabel = () => {
  const books = useSelector((state: RootState) => state.book.books);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {books.map((book: Book) => (
        <div key={book._id} className="border p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">{book.title}</h3>
            <HeartFavorite isFavorite={book.isFavorite} bookId={book._id} />  
          
          </div>

          <p className="italic">{book.author}</p>
          <p>Año: {book.year}</p>
          <p>Género: {book.genre}</p>
          <p className="text-middasgreen text-xl">
          <DeleteBook bookId={book._id} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default BooksLabel;
