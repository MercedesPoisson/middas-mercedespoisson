import React, { useState } from "react";
import { useDispatch } from "react-redux";
import withLayout from "../components/ui/withLayout";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import Description from "../components/ui/description";
import Input from "../components/ui/input";
import SelectGenre from "../components/ui/createBooks/selectGenre";
import InputNames from "../components/ui/createBooks/inputNames";
import { createBook } from "../redux/bookSlice";


const CreateBook = () => {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({
        title: "",
        author:"",
        year:"",
        genre:""
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

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setNewBook((prevBook) => ({
            ...prevBook,
            genre: value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log("Nuevo libro a crear: ", newBook);
        dispatch(createBook(newBook) as any).then((result: any) => {
        // console.log("Resultado de la creacion del libro: ", result)
    }).catch((error: any) => {
        console.log("Error al crear el libro: ", error)
    })
        
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
        <form >
          <div>
            <InputNames>{"Titulo"}</InputNames>
            <Input
              placeholder={"ingresa el título de tu libro"}
              name={"title"}
              value={newBook.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputNames>{"Autor"}</InputNames>
            <Input 
            placeholder={"ingresa el autor"} 
            name={"author"} 
            value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputNames>{"Año de Publicación"}</InputNames>
            <Input
              placeholder={"ingresa el año en que se publicó"}
              name={"year"}
              value={newBook.year}
              onChange={handleInputChange}
            />
            <InputNames>{"Genero"}</InputNames>
            <SelectGenre
            value={newBook.genre}
            onChange={handleSelectChange}
            />
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
