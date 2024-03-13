import React from "react";
import withLayout from "../components/ui/withLayout";
import Header from "../components/ui/header";
import Button from "../components/ui/button";
import Description from "../components/ui/description";

const CreateBook = () => {
    return (
        <div className="text-notblack font-poppins">
            <Header>{"Crear un nuevo libro"}</Header>
            <Button icon="arrow-back" to="/">{"volver"}</Button>
            <Description>{"Completá el formulario para cargar un nuevo libro."}</Description>
        </div>
    )
}

export default withLayout(CreateBook);