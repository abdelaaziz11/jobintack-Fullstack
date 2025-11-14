import LRU from 'lru-cache';

const cache = new LRU({
  max: 500,
  ttl: 1000 * 60 // 1 minute default
});

// middleware: key computed from query
export function cacheMiddleware(req, res, next) {
  const key = `${req.path}|${JSON.stringify(req.query)}`;
  const cached = cache.get(key);
  if (cached) {
    res.set(cached.headers || {});
    return res.json(cached.body);
  }
  // intercept send
  const originalJson = res.json.bind(res);
  res.json = (body) => {
    const headers = { ...res.getHeaders() };
    cache.set(key, { body, headers });
    return originalJson(body);
  };
  next();
}
