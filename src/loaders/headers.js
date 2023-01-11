/**
 * Loader encargado de la configuración de los headers de las respuestas en la aplicación.
 * 
 * Es llamado desde el frameworkLoader. 
 */

const setHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

export default setHeaders;
