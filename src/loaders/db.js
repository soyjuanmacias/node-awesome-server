import mongoose from 'mongoose';
import Logger from './logger';
import config from '../config';

if (!config.dbUri) {
  const error = 'No se reconoce la url de la base de datos'; 
  Logger.error(error);
  throw new Error(error);
}

const connect = async () => {
  try {
    const db = await mongoose.connect(urlDb);
    const { name, host } = db.connection;
    Logger.info(`Connected with db name: ${name} in host: ${host}`);
  } catch (error) {
    Logger.error('Error to connect with db', error);
  }
};

export default { connect };
