const { Router } = require("express");
const getAllBooks = require("../Controllers/getAllBooks");
const postBook = require("../Controllers/postBook");
const getBookById = require("../Controllers/getBookById");
const putBook = require("../Controllers/putBook");
const deleteBook = require("../Controllers/deleteBook");
const getFavorites = require("../Controllers/getFavorites");
const toggleFavorite = require("../Controllers/toggleFavorite");

const router = Router();

//Favorites
router.get("/fav", getFavorites);
router.put("/fav/:id", toggleFavorite);

//Books
router.get("/", getAllBooks);

//Book
router.post("/", postBook);
router.get("/:id", getBookById);
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

//Any other rute
router.all("*", (req, res) => {
  res.status(404).send("Ruta no encontrada");
});

module.exports = router;
