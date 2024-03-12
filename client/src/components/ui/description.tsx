import { ReactNode } from "react";

interface DescriptionProp {
  children: ReactNode;
}

const Description = ({ children }: DescriptionProp) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Description;
