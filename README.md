# 🚀 API de Registro de Estudiantes - Universidad Técnica de Manabí

Esta API permite gestionar el registro de estudiantes en el Sistema de Gestión Académica de la Universidad Técnica de Manabí. Utiliza `json-server` y `json-server-auth` para simular una base de datos y manejar autenticación.

## 📌 Características
- CRUD de estudiantes.
- Autenticación de usuarios con `json-server-auth`.
- Simulación de base de datos con `json-server`.

---

## 📂 Estructura del Proyecto
```
utm-web-service-student/
│-- db.json               # Base de datos simulada
│-- server.js             # Servidor JSON con autenticación
│-- routes.json           # Reglas de autorización
│-- package.json          # Dependencias y scripts
│-- README.md             # Documentación del proyecto
```

---

## 🛠 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/richard6veliz/utm-web-service-student
cd utm-web-service-student
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Ejecutar el servidor
```sh
npm run dev
```

El servidor correrá en `http://localhost:3000`.

---

## 📊 Endpoints Disponibles

### 🔑 Autenticación
#### Registrar un usuario
```http
POST /users
```
```json
{
  "username": "admin",
  "password": "admin123",
  "role": "admin"
}
```

#### Iniciar sesión
```http
POST /login
```
```json
{
  "username": "admin@utm.edu.ec",
  "password": "admin123"
}
```
🔹 **Respuesta:** Devuelve un `accessToken`.

---

### 🏫 Estudiantes
#### Obtener todos los estudiantes (requiere autenticación)
```http
GET /students
```

#### Obtener un estudiante por ID
```http
GET /estudiantes/{id}
```

#### Crear un estudiante
```http
POST /students
```
```json
{
  "tipoDocumento": "Cédula",
  "numeroDocumento": "1234567890",
  "nombre": "Juan",
  "apellido": "Pérez",
  "nacionalidad": "Ecuador",
  "fechaNacimiento": "2000-01-15",
  "genero": "Masculino",
  "estadoCivil": "Soltero"
}
```

#### Actualizar un estudiante
```http
PUT /students/{id}
```

#### Eliminar un estudiante
```http
DELETE /students/{id}
```

---

## 🔐 Seguridad y Permisos
Las reglas de acceso están definidas en `routes.json`:
```json
{
  "usuarios": 640,
  "estudiantes": 644
}
```
🔹 **Explicación:**
- `640`: Solo el usuario autenticado puede acceder a sus datos.
- `644`: Todos los usuarios autenticados pueden leer, pero solo el creador puede modificar.

---

## 🛠 Tecnologías Utilizadas
- **Node.js** v20.14.0
- **Express.js**
- **json-server**
- **json-server-auth**
- **CORS**
- **Nodemon**

---

## 📜 Licencia
Este proyecto está bajo la licencia MIT @richard.veliz.

