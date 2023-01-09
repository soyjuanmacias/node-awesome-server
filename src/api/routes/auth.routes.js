import { Router } from 'express';

const authRoutes = app => {
  const router = Router();
  app.use('/auth', router);

  router.get('/', (req, res, next) => res.status(200).json('Auth Routes Working'));
  router.post('/login', (req, res, next) => res.status(200).json('POST /Login working'));
};

export default authRoutes;
