const express = require('express');
const router = require('./routes/router');
const tokenValidation = require('./middleware/token.validation');

const app = express();

app.use(express.json());
app.use('/login', router.loginRoutes);
app.use('/user', router.userRoutes);
app.use(tokenValidation.validateToken);

module.exports = app;
