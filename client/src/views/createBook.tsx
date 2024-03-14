import React, { useState } from "react";
import { useDispatch } from "react-redux";
import withLayout from "../components/ui/withLayout";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import Description from "../components/ui/description";
import Input from "../components/ui/input";
import SelectGenre from "../components/createBooks/selectGenre";
import InputNames from "../components/createBooks/inputNames";
import { createBook } from "../redux/bookSlice";
import swal from "sweetalert";

const CreateBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      title: "",
      author: "",
      year: "",
      genre: "",
    };

    if (!newBook.title) {
      errors.title = "El título es requerido.";
    } else if (newBook.title.length > 30) {
      errors.title = "El título no puede exceder los 30 caracteres.";
    }

    if (!newBook.author) {
      errors.author = "El autor es requerido.";
    } else if (newBook.author.length > 20) {
      errors.author = "El autor no puede exceder los 20 caracteres.";
    }
    if (!/^\d{4}$/.test(newBook.year)) {
      errors.year = "El año contiene 4 dígitos numericos.";
    }

    if (!newBook.genre) {
      errors.genre = "El género es requerido.";
    }

    setValidationErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      genre: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }
    // console.log("Nuevo libro a crear: ", newBook);
    dispatch(createBook(newBook) as any)
      .then((result: any) => {
        setNewBook({
          title: "",
          author: "",
          year: "",
          genre: "",
        });
        swal({
          title: "¡Tu libro se ha creado correctamente!",
          icon: "success",
        });
      })
      .catch((error: any) => {
        console.log("Error al crear el libro: ", error);
      });
  };

  return (
    <div className="text-notblack font-poppins">
      <Header>{"Crear un nuevo libro"}</Header>
      <Button icon="arrow-back" to="#">
        {"volver"}
      </Button>
      <Description>
        {"Completá el formulario para cargar un nuevo libro."}
      </Description>
      <div>
        <form>
          <div>
            <InputNames>{"Titulo"}</InputNames>
            <Input
              placeholder={"ingresa el título de tu libro"}
              name={"title"}
              value={newBook.title}
              onChange={handleInputChange}
            />
            {validationErrors.title && (
              <span className="text-red-500 min-h-10">
                {validationErrors.title}
              </span>
            )}
          </div>
          <div>
            <InputNames>{"Autor"}</InputNames>
            <Input
              placeholder={"ingresa el autor"}
              name={"author"}
              value={newBook.author}
              onChange={handleInputChange}
            />
            {validationErrors.author && (
              <span className="text-red-500 min-h-5">
                {validationErrors.author}
              </span>
            )}
          </div>
          <div>
            <InputNames>{"Año de Publicación"}</InputNames>
            <Input
              placeholder={"ingresa el año en que se publicó"}
              name={"year"}
              value={newBook.year}
              onChange={handleInputChange}
            />
            {validationErrors.year && (
              <span className="text-red-500 min-h-5">
                {validationErrors.year}
              </span>
            )}
          </div>
          <div>
            <InputNames>{"Genero"}</InputNames>
            <SelectGenre value={newBook.genre} onChange={handleSelectChange} />
            {validationErrors.genre && (
              <span className="text-red-500 min-h-5">
                {validationErrors.genre}
              </span>
            )}
          </div>
          <div className="mt-4">
            <Button icon={"check"} type="button" onClick={handleSubmit}>
              {"confirmar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withLayout(CreateBook);
