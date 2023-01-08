import config from './config/index.js';
import express from 'express';
import Logger from './loaders/logger.js';

const app = express();

app
  .listen(3000, () => {
    Logger.info(`
      🟢  Server listening on port: ${config.port}`);
  })
  .on('error', error => {
    Logger.error(error);
    process.exit(1);
  });

  