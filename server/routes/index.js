const { Router } = require("express");
const getAllBooks = require("../Controllers/getAllBooks");
const postBook = require("../Controllers/postBook");
const getBookById = require("../Controllers/getBookById");
const putBook = require("../Controllers/putBook");
const deleteBook = require("../Controllers/deleteBook");

const router = Router();

router.get("/", getAllBooks);

router.post("/", postBook);

router.get("/:id", getBookById);

router.put("/:id", putBook);

router.delete("/:id", deleteBook);

router.all("*", (req, res) => {
  res.status(404).send("Ruta no encontrada");
});

module.exports = router;
