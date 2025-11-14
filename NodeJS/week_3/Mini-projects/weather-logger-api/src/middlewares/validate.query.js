import Joi from 'joi';

const schema = Joi.object({
  city: Joi.string(),
  country: Joi.string(),
  from: Joi.date().iso(),
  to: Joi.date().iso(),
  conditions: Joi.alternatives().try(Joi.array().items(Joi.string().valid('clear','clouds','rain','storm','snow')), Joi.string()),
  minTemp: Joi.number(),
  maxTemp: Joi.number(),
  sort: Joi.string(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(200).default(20),
  units: Joi.string().valid('metric','imperial').default('metric'),
  tz: Joi.string()
}).with('from', 'to').custom((value, helpers) => {
  if (value.from && value.to && new Date(value.from) >= new Date(value.to)) {
    return helpers.error('any.invalid', { message: 'from must be < to' });
  }
  return value;
});

export default function validateQuery(req, res, next) {
  const q = { ...req.query };
  // support conditions=clear,clouds or ?conditions=clear&conditions=rain
  if (typeof q.conditions === 'string' && q.conditions.includes(',')) {
    q.conditions = q.conditions.split(',').map(s => s.trim());
  }
  const { error, value } = schema.validate(q, { convert: true, stripUnknown: true });
  if (error) return res.status(400).json({ error: error.message });
  req.query = value;
  next();
}
