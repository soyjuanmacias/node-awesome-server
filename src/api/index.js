import { Router } from 'express';
import Logger from '../loaders/logger.js';
import rootRoutes from './routes/root.routes.js';
import authRoutes from './routes/auth.routes.js';

const routes = (app) => {
  const router = Router();

  rootRoutes(app);
  Logger.info('/ routes Loaded');
  authRoutes(app);
  Logger.info('/auth routes Loaded');
  
  return router;
};

export default routes;