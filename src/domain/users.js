import bcrypt from 'bcrypt';
import Logger from '../loaders/logger.js';
import { User } from '../models/index.js';

export const getUserByEmail = async email => {
  try {
    return await User.findOne({ email }).select('+password');
  } catch (error) {
    Logger.error('Error obteniendo el usuario', email);
    return null;
  }
};

export const checkIfUserExists = async (email, done) => {
  try {
    return await getUserByEmail(email);
  } catch (error) {
    Logger.error('Error obteniendo el usuario %o', email);
    return done(error);
  }
};

export const checkUserCredentials = async (email, password, done) => {
  try {
    let userDB = await getUserByEmail(email);

    if (!userDB) {
      const error = new Error('El usuario no existe');
      error.status = 401;
      return done(error);
    }
    Logger.info('🚀 User found in DB -> %o', userDB)
    const isValidUserPassword = await bcrypt.compare(password, userDB.password);
    
    if (!isValidUserPassword) {
      const error = new Error('La contraseña no coincide');
      error.status = 401;
      return done(error);
    };
    // TODO: fix login double set headers problem
    return userDB.toJSON();
  } catch (error) {
    Logger.error('Error logueando al usuario %o %o', email, error);
    return done(error);
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
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = new User({
      ...user,
      password: encryptedPassword,
    });

    const userDB = await newUser.save();
    return userDB.toJSON();
  } catch (error) {
    Logger.error('Error creando el usuario %o', error);
    return error;
  }
};
