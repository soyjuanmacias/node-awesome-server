import controller from '../../domain/controllers/template.controller.js';
import { validateCreateTemplate, validateEditTemplate } from '../middlewares/validators/template.validators.js';

/**
 * Template routes
 */
const templateRoutes = router => {
  router.get('/', controller.getAll);
  router.get('/:id', controller.getById);
  router.post('/create', validateCreateTemplate(), controller.create);
  router.put('/:id/edit', validateEditTemplate(), controller.edit);
  router.post('/:id/delete', controller.deleteOne);

  return router;
};

export default templateRoutes;
