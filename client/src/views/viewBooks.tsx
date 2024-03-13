import { useEffect, useState } from "react";
// import { fetchAllBooks } from "../redux/bookSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { Book } from "../redux/interfaces";
// import { RootState } from "../redux/store";
import withLayout from "../components/ui/withLayout";
import Button from "../components/ui/button";
import Header from "../components/ui/header";
import Description from "../components/ui/description";
import { IoIosList } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import BooksTable from "../components/viewBooks/booksTable";
import BooksLabel from "../components/viewBooks/booksLabel";

const ViewBooks = () => {
  const [viewType, setViewType] = useState("table");

  // const dispatch = useDispatch();
  // const books = useSelector((state: RootState) => state.book.books)

  // useEffect(() => {
  //     dispatch(fetchAllBooks() as any);
  //   }, [dispatch]);

  return (
    <div className="text-notblack font-poppins">
      <Header>{"Listado de Libros"}</Header>
      <Button icon="plus">{"crear Libro"}</Button>
      <Description>
        {
          "Busca el libro que estas necesitando, si no está, hace click en el botón crear libro y agregalo a la colección."
        }
      </Description>
      <div className="text-2xl text-notblack font-bold h-5 mb-2">
        <button onClick={() => setViewType("table")} className="mr-2">
          <IoIosList className="md:block hidden"/>
        </button>
        <button onClick={() => setViewType("cards")}>
          <PiSquaresFour />
        </button>
      </div>
      <div className="md:block hidden">
        {viewType === "table" ? <BooksTable /> : <BooksLabel />}
      </div>
      <div className="md:hidden block">
        <BooksLabel />
      </div>
    </div>
  );
};

export default withLayout(ViewBooks);
