import passport from 'passport';
import Logger from '../../loaders/logger.js';
import { validateLogin, validateRegister } from '../../validators/user.validators.js';

const authRoutes = router => {
  // const router = Router();

  router.get('/', (req, res, next) => res.status(200).json('Auth Routes Working'));
  router.post('/login', validateLogin(), (req, res, next) => res.status(200).json('POST /login working'));
  router.post('/register', validateRegister(), (req, res, next) => {
    const done = (error, user) => {
      if (error) return res.status(500).json(error.message);

      req.logIn(user, error => {
        if (error) return res.status(error.status || 500).json(error.message);
        return res.status(201).json(user);
      });
    };

    passport.authenticate('register', done)(req, res, next);
  });

  return router;
};

export default authRoutes;
