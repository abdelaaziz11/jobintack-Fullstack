import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import etag from 'etag';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

import observationsRouter from './routes/observations.route.js';
import statsRouter from './routes/stats.route.js';
import errorHandler from './middlewares/error.handler.js';
import logger from './middlewares/logger.emitter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(morgan('dev'));

// simple rate limit using express-rate-limit for /api/*
const limiter = rateLimit({
  windowMs: (process.env.RATE_LIMIT_DURATION ? Number(process.env.RATE_LIMIT_DURATION) : 60) * 1000,
  max: process.env.RATE_LIMIT_POINTS ? Number(process.env.RATE_LIMIT_POINTS) : 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests' }
});
app.use('/api/', limiter);

// Event logging
app.use((req, res, next) => {
  req.__start = Date.now();
  logger.emit('request:received', { method: req.method, url: req.originalUrl, query: req.query });
  res.on('finish', () => {
    const duration = Date.now() - req.__start;
    logger.emit('response:sent', { statusCode: res.statusCode, route: req.originalUrl, durationMs: duration });
  });
  next();
});

// Routes
app.use('/api/observations', observationsRouter);
app.use('/api/stats', statsRouter);

// health
app.get('/health', (req, res) => res.json({ status: 'ok', now: new Date().toISOString() }));

// error handler
app.use(errorHandler);

export default app;
