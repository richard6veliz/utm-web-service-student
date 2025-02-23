const db = require("../config/db.json");
const Estudiante = require("./student.model");

const syncDB = async () => {
    try {
        await db.sync({ alter: true });
        console.log("Base de datos sincronizada");
    } catch (error) {
        console.error("Error sincronizando la base de datos:", error);
    }
};

module.exports = { db, Estudiante, syncDB };
