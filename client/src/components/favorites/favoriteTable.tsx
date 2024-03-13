import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Favorite } from "../../redux/interfaces";
import DeleteBook from "../createBooks/deleteBook";
import HeartFavorite from "./heartFavorite";


const FavoriteTable = () => {
    const favorites = useSelector((state: RootState) => state.book.favorites);
    
  return (
    <div className="rounded-sm mt-3 ">
      <table className="w-full text-notblack">
        <thead className="bg-middasgray uppercase text-sm md:text-sm border-y border-gray-200 text-gray-700">
          <tr className="text-left h-12">
            <th style={{ width: "10%" }}>indice</th>
            <th style={{ width: "40%" }}>Titulo</th>
            <th style={{ width: "15%" }}>Autor</th>
            <th style={{ width: "10%" }}>Año</th>
            <th style={{ width: "15%" }}>Genero</th>
            <th style={{ width: "15%" }}>Favorito</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((fav: Favorite, index: number) => (
            <tr
              key={fav._id}
              className="h-10 border-b border-gray-200 hover:bg-middasgray "
            >
              <td>{index + 1}</td>
              <td>{fav.title}</td>
              <td className="italic">{fav.author}</td>
              <td>{fav.year}</td>
              <td>{fav.genre}</td>
              <td className="text-middasgreen text-xl flex justify-center items-center mt-2">
              <HeartFavorite isFavorite={fav.isFavorite} bookId={fav._id} />
              </td>
              <td className="text-xl text-middasdarkgreen cursor-pointer ">
              <DeleteBook bookId={fav._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteTable;