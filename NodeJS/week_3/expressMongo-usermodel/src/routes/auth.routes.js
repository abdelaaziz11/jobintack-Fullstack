import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import auth from '../middlewares/auth.js'

const router = express.Router();
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/health',
    auth,
    (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});


export default router;