import controller from '../../domain/controllers/user.controller.js';
import { validateLogin, validateRegister } from '../middlewares/validators/auth.validators.js';

/**
 * Rutas de autenticación
 */
const authRoutes = router => {
  router.get('/status', controller.status);
  router.post('/login', validateLogin(), controller.login);
  router.post('/register', validateRegister(), controller.register);

  return router;
};

export default authRoutes;
