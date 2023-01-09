import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from '../config/index.js';

/**
 * Tiempo de vida de cookie de sesión.
 * Actual: 60 días.
 */
const cookieLife = 60 * 24 * 60 * 60 * 1000;

/**
 * Implementación middleware para gestión de sessiones
 */
const sessionLoader = () => {
  return session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: cookieLife },
    store: MongoStore.create({ mongoUrl: config.dbUri }),
  });
};

export default sessionLoader;