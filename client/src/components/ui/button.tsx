import { ReactNode } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  icon?: "plus" | "arrow-back" | "check";
  to?: string;
  type?: "button" | "submit";
  onClick?: any;
}

const Button = ({ children, icon, to, type, onClick }: ButtonProps) => {
  const handleGoBack = () => {
    window.history.back();
  };
  const renderIcon = () => {
    switch (icon) {
      case "plus":
        return (
          <AiOutlinePlusCircle className="text-xl text-notwhite font-bold h-5 md:ml-2 md:mr-1" />
        );
      case "arrow-back":
        return (
          <IoArrowBackOutline className="text-xl text-notwhite font-bold h-5 md:ml-2 md:mr-1" />
        );
      case "check":
        return (
          <MdCheck className="text-xl text-notwhite font-bold h-5 md:ml-2 md:mr-1" />
        );
      default:
        return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const buttonType = type || (icon === "arrow-back" ? "button" : "submit");

  const clickHandler =
    onClick || (icon === "arrow-back" ? handleGoBack : undefined);

  return (
    <Link
      to={to || "#"}
      onClick={clickHandler}
      className="inline-flex bg-middasdarkgreen text-notwhite px-4 py-2 rounded hover:bg-middasgreen focus:outline-none focus:bg-middasgreen-600 transition duration-150 ease-in-out items-center justify-center"
    >
      <span className="hidden md:block text-base font-bold uppercase">
        {children}
      </span>{" "}
      {icon && renderIcon()}
    </Link>
  );
};

export default Button;
