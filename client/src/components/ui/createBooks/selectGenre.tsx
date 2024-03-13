const SelectGenre = () => {
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

  return (
    <div>
      <select className="w-full p-2 border border-gray-300 rounded hover:border-gray-400 focus:border-gray-500 transition duration-150 ease-in-out">
      <option value="" disabled selected hidden >
          Selecciona un Género
        </option>
        {sortedGenres.map((genre, index) => (
          <option key={index} value={genre} >
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenre;
