import { User } from '../models/index.js';
import Logger from '../../loaders/logger.js';

/**
 * Capa de datos.
 * 
 * Encargada de la comunicación con la base de datos
 * En esta capa se implementan los métodos de acceso a la base de datos
 * para cada entidad.
 * 
 * Esta de datos capa no debe tener ninguna dependencia con el framework.
 * Si se decidiera cambiar de base de datos, con re-implementar esta capa
 * la aplicación entera seguiría funcionando con normalidad y sin necesidad de
 * modificar ninguna otra capa.
 */

export const findUserById = async id => {
  try {
    return await User.findById(id).lean();
  } catch (error) {
    Logger.error('Error obteniendo el usuario', id);
    return null;
  }
}

export const findUserByEmail = async email => {
  try {
    return await User.findOne({ email }).select('+password').lean();
  } catch (error) {
    Logger.error('Error obteniendo el usuario', email);
    return error;
  }
};

export const createUser = async data => {
  try {
    const newDocument = new User(data);
    const created = await newDocument.save();
    return created.toJSON();
  } catch (error) {
    Logger.error('Error creando el usuario %o', error);
    return error;
  }
};
