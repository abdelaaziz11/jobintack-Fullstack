import { queryObservations, exportFiltered } from '../services/weather.service.js';
import zlib from 'zlib';
import { promisify } from 'util';
import crypto from 'crypto';
import config from '../config/config.js';
import logger from '../middlewares/logger.emitter.js';

const gzip = promisify(zlib.gzip);

export async function listObservations(req, res, next) {
  try {
    const result = await queryObservations(req.query);
    // Cache-control and ETag
    res.set('Cache-Control', 'public, max-age=60');
    const e = crypto.createHash('md5').update(JSON.stringify(result)).digest('hex');
    res.set('ETag', e);
    res.json(result);
  } catch (err) { next(err); }
}

export async function exportObservations(req, res, next) {
  try {
    const records = await exportFiltered(req.query);
    const json = JSON.stringify(records);
    const gz = await gzip(json);
    res.set('Content-Type', 'application/gzip');
    res.set('Content-Disposition', `attachment; filename="export.gz"`);

    if (config.hmacSecret) {
      const hmac = crypto.createHmac('sha256', config.hmacSecret);
      hmac.update(gz);
      res.set('X-Signature', hmac.digest('hex'));
    }

    logger.emit('export:completed', { count: records.length, bytes: gz.length, signature: res.getHeader('X-Signature') || null });
    res.send(gz);
  } catch (err) { next(err); }
}
