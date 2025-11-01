// middlewares/auth.js
module.exports = function auth(req, res, next) {
  const token = req.headers.authorization;
  if (token !== process.env.AUTH_TOKEN) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or missing token'
    });
  }
  next();
};
