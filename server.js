// const jsonServer = require("json-server");
// const auth = require("json-server-auth");
// const server = jsonServer.create();
// const router = jsonServer.router("config/db.json");
// const middlewares = jsonServer.defaults();
//
// // Middleware general
// server.use(middlewares);
// server.use(jsonServer.bodyParser);
// server.db = router.db;
//
// // Rutas de autenticación de json-server-auth
// server.use(auth);
//
// // Rutas personalizadas (asegúrate de definirlas después de auth)
// // const authRoutes = require("./routes/auth.routes");
// // server.use("/auth", authRoutes);
//
// // Reescritura de rutas con json-server
// const routes = require("./config/routes.json");
// server.use(jsonServer.rewriter(routes));
//
// // Agregar el router de JSON Server al final
// server.use(router);
//
// // Iniciar el servidor en el puerto 5000
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
// });

const express = require("express");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const router = jsonServer.router("db.json");

app.use(express.json());
app.use(cors());
app.db = router.db;

// Verificar que json-server-auth se está aplicando
console.log("Cargando json-server-auth...");


const rules = jsonServer.rewriter(require("./routes.json"));
app.use(rules);
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

