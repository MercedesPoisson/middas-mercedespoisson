const Book = require("../models/book");

const putBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);

        if(!book) {
            return res.status(404).json({message: "Libro no encontrado"});
        }
        const updatedBook = await Book.findById(id);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = putBook;