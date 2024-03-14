import withLayout from "../components/ui/withLayout";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import Description from "../components/ui/description";
import InputNames from "../components/createBooks/inputNames";
import Input from "../components/ui/input";
import SelectGenre from "../components/createBooks/selectGenre";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateBook, fetchBookById } from "../redux/bookSlice";
import { UpdateBookInterface } from "../redux/interfaces";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updateBookData, setUpdateBookData] = useState<UpdateBookInterface>({
    _id: "",
    title: "",
    author: "",
    year: "",
    genre: "",
    isFavorite: false,
  });
  // const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(fetchBookById(id) as any);
    }
  }, [dispatch, id]);

  const bookToUpdate = useSelector((state: RootState) =>
    state.book.books.find((book) => book._id === id)
  );

  useEffect(() => {
    if (bookToUpdate) {
      console.log("datos del libro: ", bookToUpdate);
      setUpdateBookData(bookToUpdate);
    }
  }, [bookToUpdate]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUpdateBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setUpdateBookData((prevState) => ({
      ...prevState,
      genre: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //validaciones para mañana
    const updatedFields = {
      title: updateBookData.title,
      author: updateBookData.author,
      year: updateBookData.year,
      genre: updateBookData.genre,
    };
    if (id) {
        dispatch(updateBook({ id, fields: updatedFields }) as any)
        .then((result: any) => {
          //manejo la actualizacion de estado
        })
        .catch((error: any) => {
          console.log("Error al intentar actualizar el libro", error);
        });
    }
  };

  return (
    <div className="text-notblack font-poppins">
      <Header>{"Actualizar Libro"}</Header>
      <Button icon="arrow-back" to="#">
        {"volver"}
      </Button>
      <Description>{"Actualizá los datos que necesites."}</Description>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <InputNames>{"Titulo"}</InputNames>
            <Input
              placeholder={"ingresa el título de tu libro"}
              name={"title"}
              value={updateBookData.title || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <InputNames>{"Autor"}</InputNames>
              <Input
                placeholder={"ingresa el autor"}
                name={"Author"}
                value={updateBookData.author || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <InputNames>{"Año de Publicación"}</InputNames>
              <Input
                placeholder={"ingresa el año en que se publicó"}
                name={"year"}
                value={updateBookData.year || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <InputNames>{"Genero"}</InputNames>
            <SelectGenre
              value={updateBookData.genre || ""}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mt-4">
            <Button icon={"check"} type="button" onClick={handleSubmit}>
              {"Actualizar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withLayout(UpdateBook);
