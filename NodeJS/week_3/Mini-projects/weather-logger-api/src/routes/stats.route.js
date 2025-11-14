import express from 'express';
import { cityStats, summary } from '../controllers/stats.controller.js';
const router = express.Router();

router.get('/city/:city', cityStats);
router.get('/summary', summary);

export default router;
