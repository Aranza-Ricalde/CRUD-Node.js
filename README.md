# Backend CRUD con Node.js, Express y Sequelize

Este es el backend de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js, Express, Sequelize y una base de datos PostgreSQL. Esta API maneja operaciones CRUD para una entidad llamada "Registros". El servicio está alojado en **Render**.

## Requisitos

- **Node.js** (v18.x.x o superior)
- **PostgreSQL** (versión 12 o superior)
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

Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno según tu configuración de PostgreSQL:

```env
DB_NAME=nombre_base_datos
DB_USER=usuario_postgresql
DB_PASSWORD=password_postgresql
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

- `DB_NAME`: Nombre de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña del usuario de la base de datos.
- `DB_HOST`: Dirección de la base de datos (generalmente `localhost` si se ejecuta localmente).
- `DB_PORT`: Puerto donde se encuentra la base de datos (por defecto es `5432` para PostgreSQL).
- `PORT`: Puerto donde se ejecutará la aplicación (opcional, el predeterminado es 3000).

### 4. Configurar y sincronizar la base de datos

Antes de iniciar el servidor, asegúrate de tener PostgreSQL ejecutándose y haber creado la base de datos que especificaste en las variables de entorno.

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
├── services
│   └── registro.service.js # Servicios del CRUD
├── validations
│   └── registro.validation.js # Validación de los datos del registro
└── .env                 # Variables de entorno (no se incluye en el repositorio)
```

- **app.js**: Configura el servidor Express y las rutas de la API.
- **config/database.js**: Configuración y conexión de Sequelize a PostgreSQL.
- **controllers/registro.controller.js**: Controlador para gestionar las operaciones CRUD en los registros.
- **models/registro.js**: Define el modelo de datos para los registros utilizando Sequelize.
- **services/registro.service.js**: Contiene la lógica de negocio para el manejo de los registros en el CRUD.
- **validations/registro.validation.js**: Archivos que contienen la lógica de validación de los datos que se reciben para la creación o actualización de los registros.
- **.env**: Contiene las variables de entorno necesarias para la configuración de la base de datos y el puerto.

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
- **Sequelize**: ORM para interactuar con la base de datos PostgreSQL.
- **PostgreSQL**: Base de datos relacional.
- **Render**: Servicio de alojamiento para el backend.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.
```
