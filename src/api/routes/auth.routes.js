import passport from 'passport';
import { validateLogin, validateRegister } from '../middlewares/validators/auth.validators.js';

/**
 * Rutas de autenticación
 */
const authRoutes = router => {
  // const router = Router();

  router.get('/', (req, res, next) => res.status(200).json('Auth Routes Working'));
  router.post('/login', validateLogin(), (req, res, next) => {
    const done = (error, user) => {
      if (error) return res.status(error.status).json(error.message);

      req.logIn(user, error => {
        if (error) return res.status(error.status || 500).json(error.message);
        return res.status(200).json(user);
      });
    };

    passport.authenticate('login', done)(req);
  });
  router.post('/register', validateRegister(), (req, res, next) => {
    const done = (error, user) => {
      if (error) return res.status(error.status).json(error.message);
      
      req.logIn(user, error => {
        if (error) return res.status(error.status || 500).json(error.message);
        return res.status(201).json(user);
      });
    };

    passport.authenticate('register', done)(req);
  });

  return router;
};

export default authRoutes;
