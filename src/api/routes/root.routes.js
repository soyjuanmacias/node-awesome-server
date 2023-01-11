import { Router } from 'express';

/**
 * Rutas sueltas y huérfanas
 */
const rootRoutes = router => {

  router.get('/', (req, res, next) => res.send('Server working route /'));
  router.head('/status', (req, res, next) => res.status(200).json('HEAD /status working'));
  router.get('/status', (req, res, next) => res.status(200).json('Server is Online'));

  return router;
};

export default rootRoutes;
