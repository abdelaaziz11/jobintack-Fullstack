// routes/api.js
import express from 'express';
import infoRoutes from './info.routes.js';
import coursesRoutes from './courses.routes.js';
import privateRoutes from './private.routes.js';
import dataRoutes from './data.routes.js';

const router = express.Router();

router.use('/', dataRoutes);
router.use('/info', infoRoutes);
router.use('/courses', coursesRoutes);
router.use('/private', privateRoutes);

export default router;
