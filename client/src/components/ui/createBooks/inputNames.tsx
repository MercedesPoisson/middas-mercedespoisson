import { ReactNode } from "react";

interface InputNamesProp {
  children: ReactNode;
}

const InputNames = ({ children }: InputNamesProp) => {
  return (
    <div className="font-poppins text-sm lg:text-base font-semibold mb-1 mt-2 uppercase text-middasdarkgreen">
      <h1>{children}</h1>
    </div>
  );
};

export default InputNames;
