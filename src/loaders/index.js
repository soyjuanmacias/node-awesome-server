import express from 'express';
import db from './dbLoader.js';
import frameworkLoader from './frameworkLoader.js';
import Logger from './logger.js';

const loaders = async (app) => {
  try {
    await db.connect();
    Logger.info('Successfully connected to database');
  } catch (error) {
    Logger.error('Error connecting to database', error);
  }

  await frameworkLoader(app);
}

export default loaders;