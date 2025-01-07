const express = require('express');
const router = express.Router(); 

const registroService = require('../services/registro.service');
const { validarRegistro } = require('../validations/registro.validation');


router.get('/registros', async (req, res) => {
  try {
    const registros = await registroService.obtenerRegistros();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener registros' });
    console.log(error);
  }
});


router.post('/registros', async (req, res) => {
  try {
    const { error } = validarRegistro(req.body);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });
    
    const nuevoRegistro = await registroService.crearRegistro(req.body);
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el registro' });
  }
});


router.put('/registros/:id', async (req, res) => {
  try {
    const { error } = validarRegistro(req.body);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });
    
    const registroActualizado = await registroService.actualizarRegistro(req.params.id, req.body);
    res.json(registroActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el registro' });
    console.log(error);
  }
});


router.delete('/registros/:id', async (req, res) => {
  try {
    await registroService.eliminarRegistro(req.params.id);
    res.status(204).json({ mensaje: 'Registro eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el registro' });
  }
});


module.exports = router;
