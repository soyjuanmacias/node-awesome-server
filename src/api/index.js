import { Router } from 'express';
import config from '../config/index.js';
import Logger from '../loaders/logger.js';
import rootRoutes from './routes/root.routes.js';
import authRoutes from './routes/auth.routes.js';

const setRouter = (app, prefix, router) => {
  app.use(config.api.prefix + prefix, router);
  Logger.info(`${prefix} routes loaded`);
}

const routes = (app) => {
  const router = Router();
  
  setRouter(app, '/', rootRoutes(router));
  setRouter(app, '/auth', authRoutes(router));

  return router;
};

export default routes;