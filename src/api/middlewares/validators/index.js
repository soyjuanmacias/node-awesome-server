import { celebrate, Joi } from 'celebrate';

/**
 * Función generadora de validaciones para req.body basado en Joi
 * @param {
 *  field: Joi.ObjectSchema()
 * } validation object with validation rules
 * @returns celebrate middleware with validation rules
 */
const validateBody = validation =>
  celebrate({
    body: Joi.object().keys(validation).messages({
      'string.empty': `El campo {{#label}} no puede estar vacío`,
      'string.email': `El formato de {{#label}} no es válido`,
      'any.required': `El campo {{#label}} es requerido`,
      'string.pattern.base': 'El campo {{#label}} tiene que tener 10 carácteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial. Máximo 20 carácteres',
    }),
  });

export {
  validateBody,
};
