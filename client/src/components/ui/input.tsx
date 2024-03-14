import React, { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full sm:w-96 p-2 border border-gray-300 rounded hover:border-gray-400 focus:border-gray-500 transition duration-150 ease-in-out"
        name={name}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
