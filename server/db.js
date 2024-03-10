const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost/middasDB", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`Conectado a MongoDB: ${db.connection.db.databaseName}`);
    } catch (error) {
        console.log("Error al conectar la DB", error);        
    }
};

module.exports = connectDB;
