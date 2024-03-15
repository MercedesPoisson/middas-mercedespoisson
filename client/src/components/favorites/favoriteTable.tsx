import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Favorite } from "../../redux/interfaces";
import HeartFavorite from "./heartFavorite";
import Pagination from "../ui/pagination";
import { useState } from "react";

const FavoriteTable = () => {
  const favorites = useSelector((state: RootState) => state.book.favorites);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(favorites.length / itemsPerPage);
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
  const booksToShow = favorites.slice(startIndex, endIndex);

  return (
    <div className="rounded-sm mt-3 ">
      <table className="w-full text-notblack">
        <thead className="bg-middasgray uppercase text-sm md:text-sm border-y border-gray-200 text-gray-700">
          <tr className="text-left h-12">
            <th style={{ width: "5%" }}></th>
            <th style={{ width: "40%" }}>Titulo</th>
            <th style={{ width: "20%" }}>Autor</th>
            <th style={{ width: "10%" }}>Año</th>
            <th style={{ width: "15%" }}>Genero</th>
            <th style={{ width: "200%" }}>Favoritos</th>
          </tr>
        </thead>
        <tbody>
          {booksToShow.map((fav: Favorite, index: number) => (
            <tr
              key={fav._id}
              className="h-10 border-b border-gray-200 hover:bg-middasgray "
            >
              <td>{index + 1}</td>
              <td className="uppercase text-sm font-bold">{fav.title}</td>
              <td className="italic">{fav.author}</td>
              <td>{fav.year}</td>
              <td>{fav.genre}</td>
              <td className="text-middasgreen text-xl flex justify-center items-center mt-2">
                <HeartFavorite isFavorite={fav.isFavorite} bookId={fav._id} />
              </td>
              <td className="text-xl text-middasdarkgreen cursor-pointer "></td>
            </tr>
          ))}
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

export default FavoriteTable;
