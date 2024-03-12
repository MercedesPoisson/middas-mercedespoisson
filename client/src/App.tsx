import React from 'react';
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css"; 
import Home from './views/home';
// import Inicio from './views/inicio';
import CreateBook from './views/createBook';
import Favorites from './views/favorites';
import ViewBooks from './views/viewBooks';
import NavBar from './components/ui/navBar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<ViewBooks />} />
        <Route path="/crear" element={<CreateBook />} />
        <Route path="/favoritos" element={<Favorites />} />
        {/* <Route path="/libros" element={<ViewBooks />} /> */}
        <Route path="/nav" element={<NavBar/>} />
      </Routes>
    </div>
  );
}

export default App;
