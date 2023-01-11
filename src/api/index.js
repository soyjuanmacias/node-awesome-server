import { Router } from 'express';
import config from '../config/index.js';
import Logger from '../loaders/logger.js';
import rootRoutes from './routes/root.routes.js';
import authRoutes from './routes/auth.routes.js';


/**
 * Función encargada de cargar todas rutas de la API en el router del Framework
const setRouter = (app, entityPrefix, router) => {
  app.use(`${config.api.prefix}${entityPrefix}`, router);
  Logger.info(`
  ${entityPrefix}
  router loaded successfully`);
}

const routes = (app) => {
  const router = Router();
  setRouter(app, '/auth', authRoutes(router));
  setRouter(app, '/', rootRoutes(router));
  return router;
};

export default routes;