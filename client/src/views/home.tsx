import React from "react";
import { Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import NavBar from "../components/ui/navBar";
import Fotter from "../components/ui/footer";
import withLayout from "../components/ui/withLayout";

const Home = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>
      
      <div className="grow p-6 md:overflow-y-auto md:p-12">
        <Outlet />
      </div>
      <Fotter />
    </div>
  );
};

export default withLayout(Home);
