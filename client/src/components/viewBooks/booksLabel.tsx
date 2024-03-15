import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../../redux/interfaces";
import DeleteBook from "../deleteBook/deleteBook";
import HeartFavorite from "../favorites/heartFavorite";
import UpdateButton from "../updateBooks/updateButton";
import Pagination from "../ui/pagination";
import { useState } from "react";

const BooksLabel = () => {
  const books = useSelector((state: RootState) => state.book.books);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const booksToShow = books.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {booksToShow.map((book: Book) => (
          <div key={book._id} className="border p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="uppercase text-sm font-bold">{book.title}</h3>
              <HeartFavorite isFavorite={book.isFavorite} bookId={book._id} />
            </div>

            <p className="italic">{book.author}</p>
            <p>Año: {book.year}</p>
            <p>Género: {book.genre}</p>
            <div className="flex items-center space-x-2">
              <UpdateButton bookId={book._id} />
              <DeleteBook bookId={book._id} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default BooksLabel;
