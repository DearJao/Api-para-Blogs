const express = require('express');
const loginRouter = require('./Login/login.routes')

const routers = exepress.Router();

routers.use('/login');

module.exports = routers;