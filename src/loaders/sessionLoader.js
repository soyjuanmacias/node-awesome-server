import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from '../config/index.js';

/**
 * Loader encargado de la configuración de la sesión.
 * 
 * Esta sesión se transportará mediante el header 'set-cookie' y el navegador
 * será el encargado de almacenarla en el lado de cliente.
 * 
 * De manera automática, el navegador enviará la cookie de sesión en cada petición.
 * 
 * Esta cookie irá protegida con el protocolo HTTPS y solo podrá ser desencriptada usando la clave de
 * sesión personalizada y con la propiedad 'httpOnly' activada.
 * 
 * La cookie de sesión se almacenará en base de datos y cada vez que se haga una petición se renovará el tiempo de vida.
 */

/**
 * Tiempo de vida de cookie de sesión.
 * Actual: 60 días.
 */
const cookieLife = 60 * 24 * 60 * 60 * 1000;

/**
 * Implementación middleware para gestión de sessiones
 * usado en el loader de framework.
 */
const sessionLoader = () => {
  return session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: cookieLife },
    store: MongoStore.create({ mongoUrl: config.dbUri }),
  });
};

export default sessionLoader;