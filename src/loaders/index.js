import db from './dbLoader.js';
import passport from '../config/auth/index.js';
import frameworkLoader from './frameworkLoader.js';
import Logger from './logger.js';

/**
 * Loader encargado de cargar todos los loaders necesarios para la aplicación,
 * en este caso, el loader de la base de datos y el loader del framework.
 * 
 * Se puede testear de manera muy sencilla mockeando los loaders sean necesarios.
 */

const loaders = async (app) => {
  try {
    await db.connect();
    Logger.info('Successfully connected to database');
  } catch (error) {
    Logger.error('Error connecting to database', error);
  }

  passport.config();

  await frameworkLoader(app);
}

export default loaders;