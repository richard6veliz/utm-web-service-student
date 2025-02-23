# 🚀 API de Registro de Estudiantes - Universidad Técnica de Manabí

Esta API permite gestionar el registro de estudiantes en el Sistema de Gestión Académica de la Universidad Técnica de Manabí. Utiliza `json-server` y `json-server-auth` para simular una base de datos y manejar autenticación.

## 📌 Características
- CRUD de estudiantes.
- Autenticación de usuarios con `json-server-auth`.
- Simulación de base de datos con `json-server`.

---

## 📂 Estructura del Proyecto
```
odontologia-api/
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
git clone <URL_DEL_REPOSITORIO>
cd odontologia-api
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Ejecutar el servidor
```sh
npm run dev
```

El servidor correrá en `http://localhost:5000`.

---

## 📊 Endpoints Disponibles

### 🔑 Autenticación
#### Registrar un usuario
```http
POST /usuarios
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
  "username": "admin",
  "password": "admin123"
}
```
🔹 **Respuesta:** Devuelve un `accessToken`.

---

### 🏫 Estudiantes
#### Obtener todos los estudiantes (requiere autenticación)
```http
GET /estudiantes
```

#### Obtener un estudiante por ID
```http
GET /estudiantes/{id}
```

#### Crear un estudiante
```http
POST /estudiantes
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
PUT /estudiantes/{id}
```

#### Eliminar un estudiante
```http
DELETE /estudiantes/{id}
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

## 📢 Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes sugerencias, abre un issue o envía un pull request.

---

## 📜 Licencia
Este proyecto está bajo la licencia MIT.

