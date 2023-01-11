import bcrypt from 'bcrypt';
import events from '../../events/index.js';
import Logger from '../../loaders/logger.js';
import { createUser, findUserByEmail, findUserById } from '../db/user.db.js';

/**
 * Capa de servicios.
 * 
 * Esta capa será la encargada de implementar la lógica de negocio de la aplicación.
 * El servicio debe recibir únicamente los argumentos precisos que necesite para realizar su tarea.
 * El servicio será el responsable de comunicarse con la capa de datos y la capa de controladores.
 * Normalmente, el servicio no tendrá dependencias con el framework.
 * 
 * En el caso de que el servicio necesite comunicarse con el framework, se deberá crear un servicio secundario
 * 
 * El servicio será el responsable de comunicarse con la capa de eventos, para emitir los eventos pertinentes según
 * la lógica de negocio y las acciones que se estén realizando.
 */

export const registerUser = async ({ done, ...user }) => {
  try {
    Logger.info('[Solicitud de Registro] email -> %o', user.email);
    const userDB = await findUserByEmail(user.email);

    if (userDB instanceof Error) return done(userDB);

    if (userDB) {
      Logger.error('[Registro Fallido] El usuario %o ya existe', user.email);
      const error = new Error('El usuario ya existe');
      error.status = 404;
      return done(error);
    }

    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

    const created = await createUser({ ...user, password: encryptedPassword });
    Reflect.deleteProperty(created, 'password');
    Logger.info('[Registro Correcto] Se ha registrado al usuario %o en DB', created.email);
    events.user.register.emit(created);
    return done(null, created);
  } catch (error) {
    Logger.error('Error registrando el usuario, %o', error);
    return error;
  }
};

export const loginUser = async ({ done, ...user }) => {
  try {
    Logger.info('[Solicitud de Login] email -> %o', user.email);
    let userDB = await findUserByEmail(user.email);

    if (!userDB) {
      Logger.error('[Login Fallido] El usuario %o no existe', user.email);
      const error = new Error('El usuario no existe');
      error.status = 401;
      return done(error);
    }

    if (userDB instanceof Error) return done(userDB);

    const isValidUserPassword = await bcrypt.compare(user.password, userDB.password);

    if (!isValidUserPassword) {
      Logger.error('[Login Fallido] Contraseña incorrecta para el usuario %o', user.email);
      const error = new Error('La contraseña no coincide');
      error.status = 401;
      return done(error);
    }

    Reflect.deleteProperty(userDB, 'password');
    Logger.info('[Login Correcto] email -> %o', userDB.email);
    events.user.login.emit(userDB);
    return done(null, userDB);
  } catch (error) {
    Logger.error('Error logueando el usuario, %o', error);
    return done(error);
  }
};

export const getUserById = async id => {
  try {
    return await findUserById(id);
  } catch (error) {
    Logger.error('Error obteniendo el usuario', id);
    return error;
  }
};
