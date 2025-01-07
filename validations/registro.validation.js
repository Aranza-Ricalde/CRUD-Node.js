const Joi = require('joi');

const validarRegistro = (datos) => {
  const esquema = Joi.object({
    nombre_completo: Joi.string().required(),
    rfc: Joi.string().pattern(/^[A-Z]{4}\d{6}[A-Z0-9]{3}$/).required(),
    correo: Joi.string().email().required(),
    codigo_postal: Joi.string().length(5).required()
  });
  
  return esquema.validate(datos);
};

module.exports = { validarRegistro };
