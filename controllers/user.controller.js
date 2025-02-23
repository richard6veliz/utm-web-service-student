const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registrar = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const usuario = await Usuario.create({ ...req.body, password: hashedPassword });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};
