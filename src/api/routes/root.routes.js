import { Router } from 'express';

const rootRoutes = app => {
  const router = Router();
  app.use('/', router);

  router.get('/', (req, res, next) => res.send('Server working route /'));
  router.head('/status', (req, res, next) => res.status(200).json('HEAD /status working'));
  router.get('/status', (req, res, next) => res.status(200).json('Server is Online'));
};

export default rootRoutes;
