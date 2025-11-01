// app.js
import express from 'express';
import morgan from 'morgan';
import apiRouter from './routes/api.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Built-in middleware
app.use(express.json());

// Request logging (morgan)
app.use(morgan('dev')); // logger middleware as requested

// Mount API router
app.use('/api', apiRouter);

// Catch-all 404
app.use((req, res, next) => {
  const err = new Error(`Route ${req.method} ${req.originalUrl} not found`);
  err.statusCode = 404;
  next(err);
});

// Centralized error handler
app.use(errorHandler);

export default app;
