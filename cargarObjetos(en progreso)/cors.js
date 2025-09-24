module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  next();
};
