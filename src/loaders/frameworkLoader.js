import express from 'express';
import cors from 'cors';
import setHeaders from './headers.js';
import config from '../config/index.js';
import routes from '../api/index.js';

const frameworkLoader = (app) => {
  app
    .disable('x-powered-by')
    .use((req, res, next) => setHeaders(req, res, next))
    .enable('trust proxy')
    .use(cors({ origin: '*', credentials: true }))
    .use(express.json({ limit: '10mb' }))
    .use(express.urlencoded({ limit: '10mb', extended: true }))
    .use(routes(app))
    .use('*', (req, res) => res.status(404).json(`Route not found ${req.originalUrl}`))
    .use((error, req, res) =>
      res.status(error.status || 500).json({ errors: { message: error.message || 'Unexpected error' } }),
    );
}

export default frameworkLoader;
