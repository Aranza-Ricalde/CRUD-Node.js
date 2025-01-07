require('dotenv').config();

const express = require('express');
const { sequelize, conectarDB } = require('./config/database'); // Aquí importa correctamente el objeto sequelize
const registroController = require('./controllers/registro.controller'); 

const app = express();

conectarDB();
sequelize.sync({ force: false }) // Ahora tienes acceso al método sync correctamente.

app.use(express.json());

app.use('/api', registroController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
