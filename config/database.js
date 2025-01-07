const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,   
  process.env.DB_USER,   
  process.env.DB_PASSWORD, 
  {
    port:5432,
    host: process.env.DB_HOST,   
    dialect: 'postgres'
  }
);

const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos PostgreSQL exitosa');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1);  
  }
};

module.exports = { sequelize, conectarDB };
