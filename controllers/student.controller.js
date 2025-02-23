const { Estudiante } = require("../models");

exports.obtenerTodos = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener estudiantes" });
    }
};

exports.crearEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.create(req.body);
        res.status(201).json(estudiante);
    } catch (error) {
        res.status(500).json({ error: "Error al crear estudiante" });
    }
};
