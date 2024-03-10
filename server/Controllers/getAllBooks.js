const connectDB = require("../db");
const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

module.exports = getAllBooks;
