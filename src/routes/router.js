const express = require('express');
const loginRoutes = require('./login.routes');

const routers = express.Router();

routers.use('/login', loginRoutes);

module.exports = routers;