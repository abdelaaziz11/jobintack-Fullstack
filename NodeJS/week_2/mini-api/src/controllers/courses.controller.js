// controllers/courses.controller.js
import * as service from '../services/courses.service.js';
import { AppError } from '../middlewares/AppError.js';

export async function list(req, res, next) {
  try {
    const courses = await service.getAll({ page: req.query.page, limit: req.query.limit });
    res.json(courses);
  } catch (err) {
    next(err);
  }
}

export async function get(req, res, next) {
  try {
    const course = await service.getById(req.params.id);
    if (!course) return next(new AppError('Course not found', 404));
    res.json(course);
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const course = await service.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    const course = await service.update(req.params.id, req.body);
    if (!course) return next(new AppError('Course not found', 404));
    res.json(course);
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const deleted = await service.remove(req.params.id);
    if (!deleted) return next(new AppError('Course not found', 404));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
