const Registro = require('../models/registro');

// Obtener todos los registros
const obtenerRegistros = async () => {
  return await Registro.findAll();
};

// Obtener un registro por ID
const obtenerRegistroPorId = async (id) => {
  return await Registro.findByPk(id);
};

// Crear un nuevo registro
const crearRegistro = async (datos) => {
  return await Registro.create(datos);
};

// Actualizar un registro
const actualizarRegistro = async (id, datos) => {
  const registro = await Registro.findByPk(id);
  if (!registro) {
    throw new Error('Registro no encontrado');
  }
  return await registro.update(datos);
};

// Eliminar un registro
const eliminarRegistro = async (id) => {
  const registro = await Registro.findByPk(id);
  if (!registro) {
    throw new Error('Registro no encontrado');
  }
  await registro.destroy();
};

module.exports = {
  obtenerRegistros,
  obtenerRegistroPorId,
  crearRegistro,
  actualizarRegistro,
  eliminarRegistro
};
