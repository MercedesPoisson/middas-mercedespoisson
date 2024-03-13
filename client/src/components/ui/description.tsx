import { ReactNode } from "react";

interface DescriptionProp {
  children: ReactNode;
}

const Description = ({ children }: DescriptionProp) => {
  return (
    <div>
      <h1 className="text-sm md:text-base text-notblack-950 mb-4 mt-2">{children}</h1>
    </div>
  );
};

export default Description;
