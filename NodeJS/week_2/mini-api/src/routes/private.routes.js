// routes/private.routes.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Private route placeholder' });
});

export default router;
