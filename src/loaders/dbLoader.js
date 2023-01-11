import mongoose from 'mongoose';
import config from '../config/index.js';
import Logger from './logger.js';

/**
 * Loader encargado de la conexión con la base de datos
 */

if (!config.dbUri) {
  const error = 'No se reconoce la url de la base de datos'; 
  Logger.error(error);
  throw new Error(error);
}

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(config.dbUri);
    const { name, host } = db.connection;
    Logger.info(`Connected with db name: ${name} in host: ${host}`);
  } catch (error) {
    Logger.error('Error to connect with db', error);
    throw new Error(error);
  }
};

export default { connect };
