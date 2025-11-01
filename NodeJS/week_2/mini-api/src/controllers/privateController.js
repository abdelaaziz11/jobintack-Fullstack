// controllers/private.controller.js
exports.getSecret = (req, res) => {
  res.json({ secret: 'Only for authorized users during daytime' });
};