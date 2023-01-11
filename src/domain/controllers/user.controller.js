import passport from 'passport';
import { doneFn } from '../../config/auth/index.js';

/**
 * Capa de controladores.
 * 
 * Desde aquí se desvía la lógica a la capa de servicios.
 * Es importante que el controlador SOLAMENTE se encargue de la lógica de negocio
 * y no de la lógica de la API.
 * Así como debe mandar al servicio únicamente los argumentos o propiedades que este necesite.
 * La única excepción donde se envían más argumentos es en el caso de autenticación por dependencias
 * de passport.js
 */

const status = (req, res, next) => res.status(200).json('[API] Auth routes working');

const login = (req, res, next) => {
  passport.authenticate('login', doneFn(req, res, next))(req);
};

const register = (req, res, next) => {
  passport.authenticate('register', doneFn(req, res, next))(req);
};

export default {
  status,
  login,
  register,
};
