// routes/courses.routes.js
import express from 'express';
import * as ctrl from '../controllers/courses.controller.js';
import validateResource from '../middlewares/validateResource.js';

const router = express.Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', validateResource, ctrl.create);
router.put('/:id', validateResource, ctrl.update);
router.delete('/:id', ctrl.remove);

export default router;
