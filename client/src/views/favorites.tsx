import React from "react";
import { useEffect, useState } from "react";
import { fetchAllFavorites } from "../redux/bookSlice";
import { useDispatch } from "react-redux";
import Button from "../components/ui/button";
import Header from "../components/ui/header";
import Description from "../components/ui/description";
import { IoIosList } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import FavoriteLabels from "../components/favorites/favoritelabels";
import FavoriteTable from "../components/favorites/favoriteTable";

const Favorites = () => {
  const [viewType, setViewType] = useState("table");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFavorites() as any);
  }, [dispatch]);

  return (
    <div className="text-notblack font-poppins">
      <Header>{"Listado de Libros Favoritos"}</Header>
      <Button icon="plus" to="/">
        {"Favoritear"}
      </Button>
      <Description>
        {"En esta sección vas a encontrar todos los libros favoriteados."}
      </Description>
      <div className="text-2xl text-notblack font-bold h-5 mb-2">
        <button onClick={() => setViewType("table")} className="mr-2">
          <IoIosList className="md:block hidden" />
        </button>
        <button onClick={() => setViewType("cards")}>
          <PiSquaresFour />
        </button>
      </div>
      <div className="md:block hidden">
        {viewType === "table" ? <FavoriteTable /> : <FavoriteLabels />}
      </div>
      <div className="md:hidden block">
        <FavoriteLabels />
      </div>
    </div>
  );
};

export default Favorites;
