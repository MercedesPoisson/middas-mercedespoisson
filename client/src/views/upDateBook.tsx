import withLayout from "../components/ui/withLayout";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import Description from "../components/ui/description";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { updateBook } from "../redux/bookSlice";

const UpdateBook = ({ bookId }: { bookId: string }) => {
    // const dispatch = useDispatch();
    // const [updateBook, setUpdateBook] = useState({ title: "", author: "", year: "", genre: ""});
    // const [validationErrors, setValidationErrors] = useState({});

    // const bookToUpdate = useSelector((state: RootState) => state.book.books.find(book => book._id === bookId));

    // useEffect(() => {
    //     if (bookToUpdate) {
    //         setUpdateBook(bookToUpdate);
    //     }
    // }, [bookToUpdate]);

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setUpdateBook(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    // const handleSelectChange = (event: React.FormEvent) => {
    //     event.preventDefault();

    //     //validaciones para mañana

    //     dispatch(updateBook(updateBook) as any)
    //     .then(() => {
    //         //manejo la actualizacion de estado
    //     })
    //     .catch((error: any) => {
    //         console.log("Error al intentar actualizar el libro", error);
            
    //     })
    // }

    
    return (
        <div className="text-notblack font-poppins">
            <Header>{"Actualizar Libro"}</Header>
            <Button icon="arrow-back" to="#">{"volver"}</Button>
            <Description>{"Actualizá los datos que necesites."}</Description>
            <div>

            </div>

        </div>
    )
}

export default withLayout(UpdateBook);