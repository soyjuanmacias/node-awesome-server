import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import passport from 'passport';
import setHeaders from './headers.js';
import sessionLoader from './sessionLoader.js';
import routes from '../api/index.js';
import { errors } from 'celebrate';

/**
 * Loader princpal de la aplicación y del framework Express usado actualmente.
 * 
 * En este loader se configuran todos los middlewares y se cargan las rutas de la API.
 * 
 * En el caso de cambiar de Framework, este loader debería ser el único que se modifique.
 */

const frameworkLoader = app => {
  app
    .disable('x-powered-by')
    .use(helmet())
    .use((req, res, next) => setHeaders(req, res, next))
    .enable('trust proxy')
    .use(cors({ origin: '*', credentials: true }))
    .use(express.json({ limit: '10mb' }))
    .use(sessionLoader())
    .use(passport.initialize())
    .use(passport.session())
    .use(express.urlencoded({ limit: '10mb', extended: true }))
    .use(routes(app))
    .use('*', (req, res) => res.status(404).json(`Route not found ${req.originalUrl}`))
    .use(errors())
    // 🚀 Rocket418 😉
    .use((error, req, res, next) =>
      res.status(error.status || 418).json({ message: error.message || 'Unexpected error' }),
    );
};

export default frameworkLoader;
