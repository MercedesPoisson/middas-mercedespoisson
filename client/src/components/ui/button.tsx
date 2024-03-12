import { ReactNode } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <Link
      to="/crear"
      className="inline-flex bg-middasdarkgreen text-notwhite px-4 py-2 rounded hover:bg-middasgreen focus:outline-none focus:bg-middasgreen-600 transition duration-150 ease-in-out items-center justify-center"    >
      <span className="hidden md:block text-base font-bold uppercase">{children}</span>{" "}
      <AiOutlinePlusCircle className="text-xl text-notwhite font-bold h-5 md:ml-2 md:mr-1" />
    </Link>
  );
};

export default Button;
