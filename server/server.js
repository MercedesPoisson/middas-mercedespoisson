const app = require("./app");
const connectDB = require("./db");

const PORT = 3001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server iniciado en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar el servidor:", err);
  });
