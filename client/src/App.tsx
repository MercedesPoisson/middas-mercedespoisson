import React from 'react';
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css"; 
import Home from './views/home';
import CreateBook from './views/createBook';
import Favorites from './views/favorites';
import ViewBooks from './views/viewBooks';
import NavBar from './components/ui/navBar';
import DetailBook from './views/detailBook';
import UpdateBook from './views/upDateBook';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<ViewBooks />} />
        <Route path="/crear" element={<CreateBook />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/libros/:id" element={<DetailBook />} />
        <Route path="/libro/:id" element={<UpdateBook />} />
        <Route path="/nav" element={<NavBar/>} />
      </Routes>
    </div>
  );
}

export default App;
