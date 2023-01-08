import dotenv from 'dotenv';

const env = dotenv.config();
if (env.error) throw new Error('🔥 No existe archivo .env');
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Server PORT
 */
const port = parseInt(process.env.PORT, 10) || 3000;

/**
 * Database URI
 */
const dbUri = process.env.DB_URI_PROD;

/**
 * Session Secret for passport and hash sessions in cookies
 */
const sessionSecret = process.env.SESSION_SECRET;

/**
 * Used by winston logger
 */
const logs = {
  level: process.env.LOG_LEVEL || 'silly',
};

/**
 * API configs
 */
const api = {
  prefix: '/api',
};

export default {
  port,
  dbUri,
  sessionSecret,
  logs,
  prefix: '/api',

};
