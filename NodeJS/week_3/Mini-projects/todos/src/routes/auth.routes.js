const express = require('express');
const authController = require('../controllers/auth.controller.js');
const auth = require('../middlewares/auth.js');


const router = express.Router();
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/health',
    auth,
    (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});


module.exports = router;