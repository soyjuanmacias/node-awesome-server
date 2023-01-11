import { Joi } from 'celebrate';
import { validateBody } from './index.js';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/;

/**
 * Se definen las propiedades que se van a validar
 */
const title = Joi.string();
const titleRequired = Joi.string().required();
const description = Joi.string();
const descriptionRequired = Joi.string().required();

/**
 * Middlewares de validación para cada una de las rutas
 * @returns celebrate middleware with validation rules
 */
const validateCreateTemplate = () => validateBody({ title: titleRequired, description: descriptionRequired });
const validateEditTemplate = () => validateBody({ title, description });

export { validateCreateTemplate, validateEditTemplate };
