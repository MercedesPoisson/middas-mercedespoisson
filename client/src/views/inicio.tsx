import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withLayout from "../components/ui/withLayout";
import Description from "../components/ui/description";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import { fetchAllBooks } from "../redux/bookSlice";
import ViewBooks from "./viewBooks";
import { RootState } from "../redux/store";

const Inicio = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.book.books);

  useEffect(() => {
    dispatch(fetchAllBooks() as any);
  }, [dispatch]);

  return (
    <div>
      {books.length === 0 ? (
        <div>
          <div className="mt-2 md:mt-16">
            <Header>{"Bienvenidos a la Librería Middas"}</Header>
          </div>
          <div>
            <Description>
              {
                "En esta librería vas a poder cargar libros, visualizarlos, actualizarlos, borrarlos y agregarlos/eliminarlos de tu lista de favoritos"
              }
            </Description>
          </div>
          <div className="font-poppins">
            Podes crear tu primer libro desde este botón{" "}
            <Button icon="plus" to="/crear">
              {"crear"}
            </Button>{" "}
            o usá las opciones del menú.
          </div>
        </div>
      ) : (
        <ViewBooks />
      )}
    </div>
  );
};

export default withLayout(Inicio);
