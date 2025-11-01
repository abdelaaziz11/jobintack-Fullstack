// controllers/info.controller.js
export function getInfo(req, res) {
  res.json({
    name: process.env.API_NAME || 'mini-api',
    version: process.env.API_VERSION || '1.0.0',
    date: new Date().toISOString()
  });
}
