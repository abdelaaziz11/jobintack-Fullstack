import fs from 'fs/promises';
import config from '../config/config.js';
import { convertUnits } from '../utils/units.js';

let RAW_CACHE = null; // simple in-memory cache of file
async function loadAll() {
  if (RAW_CACHE) return RAW_CACHE;
  const raw = await fs.readFile(config.dataFile, 'utf-8');
  RAW_CACHE = JSON.parse(raw);
  return RAW_CACHE;
}

/**
 * filters: { city, country, from, to, conditions[], minTemp, maxTemp, sort, page, limit, units, tz }
 */
export async function queryObservations(filters = {}) {
  const all = await loadAll();
  let data = Array.isArray(all) ? all.slice() : [];
  const { city, country, from, to, conditions, minTemp, maxTemp } = filters;

  if (city) data = data.filter(r => r.city.toLowerCase() === String(city).toLowerCase());
  if (country) data = data.filter(r => r.country.toLowerCase() === String(country).toLowerCase());
  if (from) data = data.filter(r => new Date(r.timestamp) >= new Date(from));
  if (to) data = data.filter(r => new Date(r.timestamp) <= new Date(to));
  if (conditions && conditions.length) data = data.filter(r => conditions.includes(r.condition));
  if (minTemp !== undefined) data = data.filter(r => r.tempC >= Number(minTemp));
  if (maxTemp !== undefined) data = data.filter(r => r.tempC <= Number(maxTemp));

  // sort (support multi-field "field:asc|desc,other:asc")
  if (filters.sort) {
    const fields = String(filters.sort).split(',');
    data.sort((a,b) => {
      for (const f of fields) {
        const [key, dir='asc'] = f.split(':');
        const va = a[key], vb = b[key];
        if (va === vb) continue;
        if (dir === 'asc') return va > vb ? 1 : -1;
        return va > vb ? -1 : 1;
      }
      return 0;
    });
  }

  const total = data.length;
  const page = Math.max(1, Number(filters.page || 1));
  const limit = Math.min(200, Number(filters.limit || 20));
  const pages = Math.ceil(total / limit) || 1;
  const offset = (page - 1) * limit;
  const results = data.slice(offset, offset + limit).map(r => convertUnits(r, filters.units || 'metric'));

  return { data: results, total, page, pages };
}

export async function exportFiltered(filters = {}) {
  const { data } = await queryObservations(filters);
  return data;
}
