const { Router } = require("express");
//const Book = require("../models/book");
const getAllBooks = require("../Controllers/getAllBooks");
const postBook = require("../Controllers/postBook");
const getBookById = require("../Controllers/getBookById");
const putBook = require("../Controllers/putBook");

const router = Router();

router.get("/", getAllBooks);

router.post("/", postBook);

router.get("/:id", getBookById);

router.put("/:id", putBook);

router.all("*", (req, res) => {
    res.status(404).send("Ruta no encontrada");
});

module.exports = router;