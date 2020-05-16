const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verify if there is an authHeader
  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' });
  }

  // Splits the token in 2 to verify if it's well formatted
  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401).send({ error: 'Token error' });
  }

  // Detructuring should sign 'Bearer' to the scheme variable and the token is self explanatory
  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token is not formatted correctly' });
  }

  // Verifies if the token matches the choosen enviromental variable
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid token' });
    }

    // If it matches, we now have access to the user's id on the request
    req.userId = decoded.id;

    return next();
  });
};
