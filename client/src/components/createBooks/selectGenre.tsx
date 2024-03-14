import React, { ChangeEvent } from "react";

interface selectProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectGenre: React.FC<selectProps> = ({ value, onChange }) => {
  const booksGenre = [
    "Ficción",
    "Aventuras",
    "História",
    "Romance",
    "Misterio",
    "Cocina",
    "Drama",
    "Fantasía",
    "Ciencia Ficción",
    "Otro",
  ];

  const sortedGenres = booksGenre.sort((a, b) => a.localeCompare(b));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      <select
        className="w-full sm:w-96 p-2 border border-gray-300 rounded hover:border-gray-400 focus:border-gray-500 transition duration-150 ease-in-out"
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled selected hidden>
          Selecciona un Género
        </option>
        {sortedGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenre;
