import Logger from '../../loaders/logger.js';

const register = async (data) => {
  const { eventName, ...user } = data;
  // TODO Lanzar servicio de Logs.
  Logger.verbose('(event %o): %o', eventName, user);
  // TODO Lanzar MailService para notificar al usuario
  // TODO Lanzar servicios y tareas relacionadas con el registro del usuario.
};

const login = async (data) => {
  const { eventName, ...user} = data;
  // TODO Lanzar servicio de Logs.
  Logger.verbose('(event %o): %o', eventName, user);
  // TODO Lanzar MailService para notificar al usuario
  // TODO Lanzar servicios y tareas relacionadas con el login del usuario.
};

export default {
  register,
  login,
}