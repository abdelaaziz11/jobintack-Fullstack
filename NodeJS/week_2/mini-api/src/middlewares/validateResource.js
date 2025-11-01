// middlewares/validateResource.js
import { AppError } from './AppError.js';

export default function validateResource(req, res, next) {
  const { title } = req.body;
  if (!title) {
    return next(new AppError('Missing required field: title', 400));
  }
  next();
}
