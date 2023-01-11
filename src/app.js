import config from './config/index.js';
import express from 'express';
import Logger from './loaders/logger.js';
import loaders from './loaders/index.js';

/**
 * TAREAS PENDIENTES DE LA APLICACIÓN
 * 
 * TODO: Añadir entornos de desarrollo, test y producción
 * TODO Add agenda.js para crons
 * TODO Add agenda.sh para interfaz visual de crons
 * TODO create nodemailer service
 * TODO añadir typedi para inversión de dependencias.
 * TODO añadir swagger para documentación de la API
 */

const startServer = async () => {
  const app = express();
  
  await loaders(app);
  
  app
    .listen(config.port, () => {
      // TODO Parametrizar el protocolo y el host según entornos
      Logger.info(`
        🟢  Server listening on http://localhost:${config.port}`);
    })
    .on('error', error => {
      Logger.error(error);
      process.exit(1);
    });
}

/**
 * 🚀 Inicio de la aplicación
 * 
 * Aquí comienza la magia 😉
 */
startServer();