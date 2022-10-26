const jwt = require('jsonwebtoken');

const tokenGenerate = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign(payload, secretKey, jwtConfig);
  return token;
};

module.exports = tokenGenerate;
