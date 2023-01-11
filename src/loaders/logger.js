import winston from 'winston';
import config from '../config/index.js';

/**
 * Loader encargado de la configuración del logger.
 * La configuración del logger se basa en el entorno de ejecución.
 * 
 * Se puede testear de manera muy sencilla mockeando los transports necesarios.
 * 
 * Se deberán loguear todos los eventos y errores que ocurran en la aplicación.
 */

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
 * 
 * Se prepara para que en producción tenga un formato correcto. La intención es grabar logs en un fichero.
 * 
 * Con el servidor en entorno de desarrollo se mostrarán los logs por consola.
 * 
 * En caso de que se quiera usar otro logger, se debería modificar este loader.
 */
const Logger = winston.createLogger({
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

export default Logger;