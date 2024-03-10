const Book = require("../models/book");

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json({ message: "Libro borrado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteBook;
