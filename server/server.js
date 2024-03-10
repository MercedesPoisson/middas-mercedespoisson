const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = 3001;

connectDB();

app.get("/api/home", (req, res)=> {
    res.json({message: "Hola Middas!"});
});

app.listen(PORT, () => {
    console.log(`Server iniciado en puerto ${PORT}`)
});