import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withLayout from "../components/ui/withLayout";
import Description from "../components/ui/description";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import { fetchAllBooks, fetchAllFavorites } from "../redux/bookSlice";
import { RootState } from "../redux/store";
import Favorites from "./favorites";

const NoFav = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.book.favorites);

  useEffect(() => {
    dispatch(fetchAllBooks() as any);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllFavorites() as any);
  })

  return (
    <div>
      {favorites.length === 0 ? (
        <div>
          <div className="mt-2 md:mt-16">
            <Header>{"Aún no tenes libros Favoritos"}</Header>
          </div>
          <div>
            <Description>
              {
                "En esta sección vas a poder visualizar los libros que mas te gustan"
              }
            </Description>
          </div>
          <div className="font-poppins">
            Podes empezar a favoritearlos desde este botón{" "}
            <Button icon="plus" to="/">
              {"favoritear"}
            </Button>
          </div>
        </div>
      ) : (
        <Favorites />
      )}
    </div>
  );
};

export default withLayout(NoFav);
