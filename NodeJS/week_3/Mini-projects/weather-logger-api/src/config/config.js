export default {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  dataFile: 'data/observations.json',
  hmacSecret: process.env.HMAC_SECRET || null,
  tzDefault: process.env.TZ_DEFAULT || 'Africa/Casablanca'
};
