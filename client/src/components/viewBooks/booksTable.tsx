import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../../redux/interfaces";
import HeartFavorite from "../favorites/heartFavorite";
import DeleteBook from "../deleteBook/deleteBook";
import UpdateButton from "../updateBooks/updateButton";

const BooksTable = () => {
  const books = useSelector((state: RootState) => state.book.books);
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
          {books.map((book: Book, index: number) => {
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
    </div>
  );
};

export default BooksTable;
