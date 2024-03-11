import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
// import Header from "./ui/header";
import { poppins } from "./ui/fonts";
import NavBar from "./ui/navBar";

export const metadata: Metadata = {
  title: "Middas - Mercedes Poisson",
  description: "Prueba Técnica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>

      {/* <Header /> */}
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
