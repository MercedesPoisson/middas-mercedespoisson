import React from "react";
import withLayout from "../components/ui/withLayout";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import Description from "../components/ui/description";
import Input from "../components/ui/input";
import SelectGenre from "../components/ui/createBooks/selectGenre";
import InputNames from "../components/ui/createBooks/inputNames";

const CreateBook = () => {
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
        <form action="">
          <div>
            <InputNames>{"Titulo"}</InputNames>
            <Input
              placeholder={"ingresa el título de tu libro"}
              name={"title"}
            />
          </div>
          <div>
            <InputNames>{"Autor"}</InputNames>
            <Input placeholder={"ingresa el autor"} name={"author"} />
          </div>
          <div>
            <InputNames>{"Año de Publicación"}</InputNames>
            <Input
              placeholder={"ingresa el año en que se publicó"}
              name={"year"}
            />
            <InputNames>{"Genero"}</InputNames>
            <SelectGenre />
          </div>
          <div className="mt-2">
            <Button icon={"check"} to={"/"}>
              {"confirmar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withLayout(CreateBook);
