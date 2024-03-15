import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Favorite } from "../../redux/interfaces";
import DeleteBook from "../deleteBook/deleteBook";
import HeartFavorite from "./heartFavorite";
import Pagination from "../ui/pagination";
import { useState } from "react";

const FavoriteLabels = () => {
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
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {booksToShow.map((fav: Favorite) => (
          <div key={fav._id} className="border p-4">
            <div className="flex items-center justify-between mb-2 overflow-hidden">
              <h3 className="uppercase text-sm font-bold">{fav.title}</h3>
              <DeleteBook bookId={fav._id} />
            </div>

            <p className="italic">{fav.author}</p>
            <p>Año: {fav.year}</p>
            <p>Género: {fav.genre}</p>
            <div className="text-middasgreen text-xl">
              <HeartFavorite isFavorite={fav.isFavorite} bookId={fav._id} />
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

export default FavoriteLabels;
