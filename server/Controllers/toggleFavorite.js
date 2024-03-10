const Book = require("../models/book");

const toggleFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    const bookTitle = book.title;
    book.isFavorite = !book.isFavorite;
    await book.save();
    res
      .status(200)
      .json({
        message: `El estado de favoritos ${bookTitle} se actualizó correctamente `,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = toggleFavorite;
