const Book = require("../models/book");

const getFavorites = async (req, res) => {
    try {
        const favorites = await Book.find({isFavorite: true});
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getFavorites;