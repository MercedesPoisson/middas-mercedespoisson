const Book = require("../models/book");

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
};

module.exports = getBookById;