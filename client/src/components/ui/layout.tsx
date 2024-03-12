import React, { ReactNode } from "react";
import NavBar from "./navBar";

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    
    </div>
  );
};

export default Layout;