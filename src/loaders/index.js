import db from './dbLoader.js';
import passport from '../config/auth/index.js';
import frameworkLoader from './frameworkLoader.js';
import Logger from './logger.js';

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