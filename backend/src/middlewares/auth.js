const jwt = require('jsonwebtoken');

const AuthMiddleware = (req, res, next) =>
{
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token)
  {
    return res.status(401).send('Login Required');
  }

  try
  {
    const decoded = jwt.decode(token, { complete: true });
    req.user = decoded.payload;
    next();
  } catch (err)
  {
    res.status(400).send('Invalid token.');
  }
}

module.exports = { AuthMiddleware }