import { Joi } from 'celebrate';
import { validateBody } from './index.js';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/;

/**
 * Se definen las propiedades que se van a validar
 */
const email = Joi.string().email().required();
const password = Joi.string().regex(RegExp(passwordRegex)).required();
const name = Joi.string().required();
const lastName = Joi.string().required();

/**
 * Middlewares de validación para cada una de las rutas
 * @returns celebrate middleware with validation rules
 */
const validateLogin = () => validateBody({ email, password });
const validateRegister = () => validateBody({ email, password, name, lastName });


export { validateLogin, validateRegister };
