// middlewares/timeLimiter.js
module.exports = function timeLimiter(req, res, next) {
  const now = new Date();
  const hour = now.getHours(); // 0-23
  // Block between 22:00 (22) and 06:00 (6)
  if (hour >= 22 || hour < 6) {
    return res.status(403).json({
      error: 'Service unavailable at this time',
      message: 'Requests blocked between 22:00 and 06:00'
    });
  }
  next();
};
