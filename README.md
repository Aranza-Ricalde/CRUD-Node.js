# Backend CRUD con Node.js, Express y Sequelize

Este es el backend de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js, Express, Sequelize y una base de datos MySQL. Esta API maneja operaciones CRUD para una entidad llamada "Registros".

## Requisitos

- **Node.js** (v18.x.x o superior)
- **MySQL** (versión 5.7 o superior)
- **npm** o **yarn** para gestionar dependencias

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio/backend
```

### 2. Instalar dependencias

Asegúrate de tener las dependencias necesarias instaladas. Ejecuta el siguiente comando:

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno según tu configuración de MySQL:

```env
DB_NAME=nombre_base_datos
DB_USER=usuario_mysql
DB_PASSWORD=password_mysql
DB_HOST=localhost
PORT=3000
```

- `DB_NAME`: Nombre de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña del usuario de la base de datos.
- `DB_HOST`: Dirección de la base de datos (generalmente `localhost`).
- `PORT`: Puerto donde se ejecutará la aplicación (opcional, el predeterminado es 3000).

### 4. Configurar y sincronizar la base de datos

Antes de iniciar el servidor, asegúrate de tener MySQL ejecutándose y haber creado la base de datos que especificaste en las variables de entorno.

Para sincronizar los modelos con la base de datos, simplemente arranca la aplicación y Sequelize se encargará de crear las tablas correspondientes si no existen.

```bash
node app.js
```

### 5. Ejecutar el servidor

Inicia el servidor utilizando el siguiente comando:

```bash
node app.js
```

El servidor estará corriendo en `http://localhost:3000`.

## Estructura del Proyecto

```bash
.
├── app.js               # Archivo principal del servidor
├── config
│   └── database.js      # Configuración de la conexión a la base de datos
├── controllers
│   └── registro.controller.js  # Controlador para manejar las operaciones CRUD
├── models
│   └── registro.js      # Modelo Sequelize para los registros
├── routes
│   └── registro.routes.js # Rutas del CRUD
└── .env                 # Variables de entorno (no se incluye en el repositorio)
```

- **app.js**: Configura el servidor Express y las rutas de la API.
- **config/database.js**: Configuración y conexión de Sequelize a MySQL.
- **controllers/registro.controller.js**: Controlador para gestionar las operaciones CRUD en los registros.
- **models/registro.js**: Define el modelo de datos para los registros utilizando Sequelize.
- **routes/registro.routes.js**: Define las rutas para el CRUD.

## Endpoints de la API

La API expone los siguientes endpoints para gestionar los registros:

- `GET /api/registros`: Obtener todos los registros.
- `GET /api/registros/:id`: Obtener un registro por su ID.
- `POST /api/registros`: Crear un nuevo registro.
- `PUT /api/registros/:id`: Actualizar un registro existente.
- `DELETE /api/registros/:id`: Eliminar un registro por su ID.

### Ejemplo de solicitud con `curl`

#### Obtener todos los registros:

```bash
curl -X GET https://crud-node-js-621x.onrender.com/api/registros
```

#### Crear un nuevo registro:

```bash
curl -X POST https://crud-node-js-621x.onrender.com/api/registros \
     -H "Content-Type: application/json" \
     -d '{"nombre": "Nuevo Registro", "descripcion": "Descripción del registro"}'
```

## Herramientas utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **Express**: Framework para manejar rutas y solicitudes HTTP.
- **Sequelize**: ORM para interactuar con la base de datos MySQL.
- **MySQL**: Base de datos relacional.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.
```
