import { useEffect } from "react";
import { fetchAllBooks } from "../redux/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import { Book } from "../redux/interfaces";
import { RootState } from "../redux/store";
import withLayout from "../components/ui/withLayout";
import Button from "../components/ui/button";
import Header from "../components/ui/header";
import Description from "../components/ui/description";

const ViewBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.book.books)

    useEffect(() => {
        dispatch(fetchAllBooks() as any); 
      }, [dispatch]);

    console.log(books)

    return (
        <div className="text-notblack font-poppins">
            <Header>{"Detalle de Libros existentes"}</Header>
            <Button>{"crear Libro"}</Button>
            <Description>{"Busca el libro que estas necesitando, si no esta hace click en el botón crear libro y agregalo"}</Description>
        <ul>
        {books.map((book: Book) => ( 
          <li key={book.id}>
            {book.title}
          </li>
        ))}
        </ul>
        </div>
    )
}

export default withLayout(ViewBooks);