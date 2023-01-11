import { Router } from 'express';
import config from '../config/index.js';
import Logger from '../loaders/logger.js';
import rootRoutes from './routes/root.routes.js';
import authRoutes from './routes/auth.routes.js';
import templateRoutes from './routes/template.routes.js';


/**
 * Función encargada de cargar todas rutas de la API en el router del Framework
 * @param {*} app Framework (Express)
 * @param {*} prefix Prefijo de la versión de la API
 * @param {*} router Router del Framework
 */
const setRouter = (app, entityPrefix, router) => {
  app.use(`${config.api.prefix}${entityPrefix}`, router);
  Logger.info(`
  ${entityPrefix}
  router loaded successfully`);
}

/**
 * Generador del router usado en la configuración en frameworkLoader
 * @param {*} app Framework (Express)
 * @returns router del Framework configurado con todas las rutas cargadas
 */
const routes = (app) => {
  const router = Router();
  setRouter(app, '/templates', templateRoutes(router));
  setRouter(app, '/auth', authRoutes(router));
  setRouter(app, '/', rootRoutes(router));
  return router;
};

export default routes;