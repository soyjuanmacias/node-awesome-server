import winston from 'winston';
import config from '../config/index.js';

/**
 * Transports necesarios para Winston.
 */
const transports = [];

/**
 * Transport en caso de que el entorno sea de desarrollo serán logs completos
 * En cualquier otro caso, logs simples.
 */
if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.cli(), winston.format.splat()),
    }),
  );
}

/**
 * Instancia del logger que usaremos, en este caso, Winston.
 * Configuramos Logger para que use los transports que hemos definido según entorno.
 */
const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYY HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports,
});

export default LoggerInstance;