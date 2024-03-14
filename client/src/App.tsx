import React from "react";
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Home from "./views/home";
import CreateBook from "./views/createBook";
import DetailBook from "./views/detailBook";
import UpdateBook from "./views/upDateBook";
import Inicio from "./views/inicio";
import NoFav from "./views/noFav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Inicio />} />
        <Route path="/crear" element={<CreateBook />} />
        <Route path="/favoritos" element={<NoFav />} />
        <Route path="/libros/:id" element={<DetailBook />} />
        <Route path="/libro/:id" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;
