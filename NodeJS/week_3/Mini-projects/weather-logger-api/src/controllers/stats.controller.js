import { queryObservations } from '../services/weather.service.js';

export async function cityStats(req, res, next) {
  try {
    const city = req.params.city;
    const { data } = await queryObservations({ city, limit: 10000 });
    // compute min/max/avg for tempC, humidity, wind.speed and histogram of conditions
    const stats = {
      city,
      count: data.length,
      temp: { min: null, max: null, avg: null },
      humidity: { min: null, max: null, avg: null },
      wind: { min: null, max: null, avg: null },
      conditions: {}
    };
    if (data.length) {
      let tSum=0, hSum=0, wSum=0;
      stats.temp.min = Math.min(...data.map(d=>d.tempC));
      stats.temp.max = Math.max(...data.map(d=>d.tempC));
      tSum = data.reduce((s,d)=>s + d.tempC,0);
      stats.temp.avg = tSum/data.length;

      stats.humidity.min = Math.min(...data.map(d=>d.humidity));
      stats.humidity.max = Math.max(...data.map(d=>d.humidity));
      hSum = data.reduce((s,d)=>s + d.humidity,0);
      stats.humidity.avg = hSum/data.length;

      stats.wind.min = Math.min(...data.map(d=>d.wind?.speed || 0));
      stats.wind.max = Math.max(...data.map(d=>d.wind?.speed || 0));
      wSum = data.reduce((s,d)=>s + (d.wind?.speed || 0),0);
      stats.wind.avg = wSum/data.length;

      for (const d of data) {
        stats.conditions[d.condition] = (stats.conditions[d.condition] || 0) + 1;
      }
    }
    res.json(stats);
  } catch (err) { next(err); }
}

export async function summary(req, res, next) {
  try {
    const { data, total } = await queryObservations({ limit: 10000 });
    // compute global summary simple
    const summary = {
      total,
      cities: [...new Set(data.map(d=>d.city))].length,
      avgTemp: data.length ? data.reduce((s,d)=>s + d.tempC,0)/data.length : null
    };
    res.json(summary);
  } catch (err) { next(err); }
}
