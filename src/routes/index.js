// const express = require('express');
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');
// const tokenValidation = require('../middleware/token.validation');

// const routers = express.Router();

// routers.use('/login', loginRoutes);
// routers.use('/user', userRoutes);
// routers.use(tokenValidation.validateToken)

module.exports = {
  loginRoutes,
  userRoutes,
};