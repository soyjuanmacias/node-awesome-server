import config from './config/index.js';
import express from 'express';
import Logger from './loaders/logger.js';
import loaders from './loaders/index.js';

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