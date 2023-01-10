import { checkUserCredentials, createUser } from '../domain/users.js';
import Logger from '../loaders/logger.js';

export const onUserRegister = async data => {
  Logger.info('Ejecutando evento onUserRegister %o', data);
  const user = await createUser(data);
  Reflect.deleteProperty(user, 'password');
  Logger.info('🚀 Register new user in DB -> %o', user.id);
  return data.done(null, user);
};

export const onUserLogin = async ({ email, password, done }) => {
  try {
    Logger.info('Ejecutando evento onUserLogin para %o', email);
    const user = await checkUserCredentials(email, password, done);
    Reflect.deleteProperty(user, 'password');
    return done(null, user);
  } catch (error) {
    return done(error);
  }
};
