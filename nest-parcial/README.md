# Proyecto Base — Parcial Práctico Backend (NestJS + MongoDB)

API REST en NestJS y Mongoose para la gestión de **Usuarios (`/users`)** y **Tareas (`/tasks`)**.

---

## Requisitos Previos

- **Node.js** 18+ y **npm**
- **Docker Desktop** (o instancia local de MongoDB en el puerto `27017`)

---

## Instalación y Puesta en Marcha

1. **Levantar la base de datos MongoDB:**
   ```bash
   docker compose up -d
   ```
   *(Si utilizas una instancia local o MongoDB Atlas diferente a `mongodb://localhost:27017/nest-parcial`, configura la variable `MONGODB_URI` en un archivo `.env` tomando como base `.env.example`.)*

2. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación en modo desarrollo:**
   ```bash
   npm run start:dev
   ```
   El servidor quedará disponible en `http://localhost:3000`.

---

## Pruebas y Validación

- **Ejecutar pruebas unitarias:**
  ```bash
  npm test
  ```
- **Ejecutar pruebas end-to-end:**
  ```bash
  npm run test:e2e
  ```
- **Verificar compilación y linter:**
  ```bash
  npm run build
  npm run lint
  ```

---

## Endpoints del Sistema

| Método | Ruta | Acceso | Descripción |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Público | Verificación básica del servidor |
| `POST` | `/users` | Público | Crear usuario (`name`, `email`) |
| `GET` | `/users` | Público | Listar usuarios registrados |
| `GET` | `/users/:id` | Público | Consultar usuario por ID |
| `GET` | `/tasks` | Público | Listar tareas registradas |
| `GET` | `/tasks/:id` | Público | Consultar tarea por ID |
| `POST` | `/tasks` | Restringido (`Authorization: admin-secret-token`) | Crear una tarea asociada a un usuario |

También puedes importar `nest-parcial.postman_collection.json` en Postman o utilizar `requests.http` con la extensión REST Client de VS Code para probar manualmente los endpoints.

Evidencia:
Para el caso 1 se creó un archivo con el DTO que tenga únicamente los campos necesarios para hacer una petición de Post de algún task, también y en el controlador para el método Post se hace que reciba payload: CreateTaskDto en vez de any para que solo reciba el contrato que definimos. Finalmente se agregó el Validation Pipe en main con lista blanca para asegurarse de que si llegara a aparecer más campos dentro de la petición Post de un task, estos campos puedan ser descartados en silencio. 
Para el caso 2, se editó en users module para que exportara su servicio y posteriormente en task module ya no se importa el schema sino que se importa UsersModule.
Para el caso 3, lo que se hizo fue quitar esa validación de autorización de middleware, y crear un archivo nuevo de auth.guard que se ocupe de esta validación para ser puesto luego como decorador para el método post en el controlador para qué unicamente se requiera la validación solo para este método. 
Para el caso 4, lo que se hizo fue crear el método create en tasks.service para que no falle los tests de únicamente task y además se define en el constructor el servicio de Users. 