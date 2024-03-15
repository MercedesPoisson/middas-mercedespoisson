import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../../redux/interfaces";
import HeartFavorite from "../favorites/heartFavorite";
import DeleteBook from "../deleteBook/deleteBook";
import UpdateButton from "../updateBooks/updateButton";
import Pagination from "../ui/pagination";
import { useState } from "react";

const BooksTable = () => {
  const books = useSelector((state: RootState) => state.book.books);

  const itemsPerPage = 10;
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
    <div className="rounded-sm mt-3 ">
      <table className="w-full text-notblack">
        <thead className="bg-middasgray uppercase text-sm md:text-sm border-y border-gray-200 text-gray-700">
          <tr className="text-left h-12">
            <th style={{ width: "5%" }}></th>
            <th style={{ width: "40%" }}>Titulo</th>
            <th style={{ width: "15%" }}>Autor</th>
            <th style={{ width: "10%" }}>Año</th>
            <th style={{ width: "15%" }}>Genero</th>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {booksToShow.map((book: Book, index: number) => {
            return (
              <tr
                key={book._id}
                className="h-10 border-b border-gray-200 hover:bg-middasgray"
              >
                <td>{index + 1}</td>
                <td className="uppercase text-sm font-bold">{book.title}</td>
                <td className="italic">{book.author}</td>
                <td>{book.year}</td>
                <td>{book.genre}</td>
                <td className="text-middasgreen text-xl flex justify-center items-center mt-2">
                  <HeartFavorite
                    isFavorite={book.isFavorite}
                    bookId={book._id}
                  />
                </td>
                <td>
                  <UpdateButton bookId={book._id} />
                </td>
                <td className="cursor-pointer ">
                  <DeleteBook bookId={book._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default BooksTable;
