// middlewares/errorHandler.js
import { AppError } from './AppError.js';

export default function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      timestamp: err.timestamp
    });
  }

  console.error(err);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
}
