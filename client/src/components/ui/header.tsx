import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

const Header = ({ children }: HeadProp) => {
  return (
    <div className="font-poppins text-lg lg:text-xl font-bold mb-2 uppercase text-middasdarkgreen">
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
