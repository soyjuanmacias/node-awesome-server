import passport from 'passport';
import registerStrategy from './register.strategy.js';
import loginStrategy from './login.strategy.js';
import { getUserById } from '../../domain/services/user.service.js';
import Logger from '../../loaders/logger.js';

/**
 * 
 * @param {*} req Viene proporcionado por el controlador user.controller.js Necesario para el req.logIn
 * @param {*} res Viene proporcionado por el controlador user.controller.js Necesario para dar respuesta al usuario
 * @returns 
 */
});

/**
 * Middleware para el manejo de sesiones de passport
 */
passport.deserializeUser(async (id, done) => {
  try {
    const logged = await getUserById(id);
    return done(null, logged);
  } catch (error) {
    Logger.error('Error en deserializeUser %o', error)
    return done(error);
  }
});

const config = () => {
  passport.use('login', loginStrategy);
  passport.use('register', registerStrategy);
};

export default { config };
