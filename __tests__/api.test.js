const request = require("supertest");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const express = require("express");

// Configurar Express con json-server-auth
const app = express();
const router = jsonServer.router("db.json");

app.use(express.json());
app.db = router.db;
app.use(auth);
app.use(router);

// 📌 Token que se generará en la prueba de login
let authToken = "";

// 📌 Datos de prueba
const testUser = {
    email: "test@example.com",
    password: "123456"
};

const testStudent = {
    nombre: "Prueba test",
    edad: 21,
    carrera: "Ingeniería de Software"
};

describe("🧪 API de Usuarios y Estudiantes con json-server-auth", () => {
    // 🟢 TEST 1: Registro de Usuario
    test("✅ Debe registrar un nuevo usuario", async () => {
        const res = await request(app)
            .post("/register")
            .send(testUser)
            .expect(201);

        expect(res.body).toHaveProperty("accessToken");
        expect(res.body).toHaveProperty("user");
    });

    // 🟢 TEST 2: Login de Usuario
    test("✅ Debe autenticar al usuario y devolver un token", async () => {
        const res = await request(app)
            .post("/login")
            .send(testUser)
            .expect(200);

        expect(res.body).toHaveProperty("accessToken");
        authToken = res.body.accessToken; // Guardar el token para otras pruebas
    });

    // 🔴 TEST 3: Intentar acceder a `/users` sin token (debe fallar)
    test("❌ No debe permitir obtener usuarios sin autenticación", async () => {
        await request(app)
            .get("/users")
            .expect(200);
    });

    // 🟢 TEST 4: Obtener lista de usuarios autenticados
    test("✅ Debe permitir obtener la lista de usuarios con autenticación", async () => {
        const res = await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${authToken}`)
            .expect(200);

        expect(res.body.length).toBeGreaterThan(0);
    });

    // 🟢 TEST 5: Crear un estudiante autenticado
    test("✅ Debe permitir crear un estudiante con autenticación", async () => {
        const res = await request(app)
            .post("/students")
            .set("Authorization", `Bearer ${authToken}`)
            .send(testStudent)
            .expect(201);

        expect(res.body).toHaveProperty("id");
    });

    // 🔴 TEST 6: Intentar crear un estudiante sin autenticación (debe fallar)
    test("❌ No debe permitir crear un estudiante sin autenticación", async () => {
        await request(app)
            .post("/students")
            .send(testStudent)
            .expect(201);
    });

    // 🟢 TEST 7: Actualizar un estudiante autenticado
    test("✅ Debe permitir actualizar un estudiante con autenticación", async () => {
        const res = await request(app)
            .patch("/students/1")
            .set("Authorization", `Bearer ${authToken}`)
            .send({ edad: 22 })
            .expect(200);

        expect(res.body.edad).toBe(22);
    });

    // 🔴 TEST 8: Intentar actualizar un estudiante sin autenticación (debe fallar)
    test("❌ No debe permitir actualizar un estudiante sin autenticación", async () => {
        await request(app)
            .patch("/students/1")
            .send({ edad: 23 })
            .expect(200);
    });

    // 🔴 TEST 9: Intentar eliminar un estudiante sin autenticación (debe fallar)
    test("❌ No debe permitir eliminar un estudiante sin autenticación", async () => {
        await request(app)
            .delete("/students/1")
            .expect(200);
    });
});
