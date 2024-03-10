const Book = require("../models/book");

const postBookController = async (req, res) => {
  try {
    const newbook = await Book.create(req.body);
    res.status(200).json(newbook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postBookController;
