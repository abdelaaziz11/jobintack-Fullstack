import express from 'express';
import { search } from '../controllers/data.controller.js';

const router = express.Router();

router.get('/products', search);

export default router;
