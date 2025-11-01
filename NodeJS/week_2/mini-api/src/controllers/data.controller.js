import { queryProducts } from '../services/dataService.js';

export async function search(req, res, next) {
  try {
    const results = await queryProducts(req.query);
    console.log(`${req.method} ${req.originalUrl} -> ${results.length} results`);
    res.json(results);
  } catch (err) {
    next(err); // let the global error handler format it
  }
}
