const { DataTypes } = require("sequelize");
const db = require("../config/db.json");

const Estudiante = db.define("Estudiante", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estadoCivil: {
        type: DataTypes.STRING,
    },
    tipoDocumento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroDocumento: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

module.exports = Estudiante;
