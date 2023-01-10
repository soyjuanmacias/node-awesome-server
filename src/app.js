import config from './config/index.js';
import express from 'express';
import Logger from './loaders/logger.js';
import loaders from './loaders/index.js';

/**
 * TODO Add agenda.js para crons
 * TODO Add agenda.sh para interfaz visual de crons
 * TODO create nodemailer service
 * TODO create event emitter service
 * TODO añadir typedi para inversión de dependencias.
 * 
 */

const startServer = async () => {
  const app = express();
  
  await loaders(app);
  
  app
    .listen(config.port, () => {
      Logger.info(`
        🟢  Server listening on http://localhost:${config.port}`);
    })
    .on('error', error => {
      Logger.error(error);
      process.exit(1);
    });
}

startServer();