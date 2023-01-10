import Logger from '../loaders/logger.js';
import { User } from '../models/index.js';

export const checkIfUserExists = async (email, done) => {
  try {
    return await getUserByEmail(email);
  } catch (error) {
    Logger.error('Error obteniendo el usuario %o', email);
    return done(error);
  }
};

export const getUserByEmail = async email => {
  try {
    return await User.findOne({ email }).lean();
  } catch (error) {
    Logger.error('Error obteniendo el usuario', email);
    return null;
  }
};

export const getUserById = async id => {
  try {
    return await User.findById(id).lean();
  } catch (error) {
    Logger.error('Error obteniendo el usuario', email);
    return error;
  }
};

export const createUser = async user => {
  try {
    // return await User.create(user);
    // TODO Sacar lógica a servicio
    return '🫵🏻';
  } catch (error) {
    Logger.error('Error creando el usuario', user.email);
    return error;
  }
};
