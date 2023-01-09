import { Router } from 'express';

const authRoutes = router => {
  // const router = Router();

  router.get('/', (req, res, next) => res.status(200).json('Auth Routes Working'));
  router.post('/login', (req, res, next) => res.status(200).json('POST /Login working'));

  return router;
};

export default authRoutes;
