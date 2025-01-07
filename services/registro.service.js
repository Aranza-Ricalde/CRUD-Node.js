const Registro = require('../models/registro');

const obtenerRegistros = async () => {
  return await Registro.findAll();
};

const obtenerRegistroPorId = async (id) => {
  return await Registro.findByPk(id);
};

const crearRegistro = async (datos) => {
  return await Registro.create(datos);
};

const actualizarRegistro = async (id, datos) => {
  const registro = await Registro.findByPk(id);
  if (!registro) {
    throw new Error('Registro no encontrado');
  }
  return await registro.update(datos);
};

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
