import express from 'express';
import { listObservations, exportObservations } from '../controllers/observations.controller.js';
import { cacheMiddleware } from '../middlewares/cache.lru.js';
import validateQuery from '../middlewares/validate.query.js';

const router = express.Router();

// GET /api/observations
router.get('/', validateQuery, cacheMiddleware, listObservations);

// GET /api/observations/export.gz
router.get('/export', validateQuery, exportObservations);

export default router;
