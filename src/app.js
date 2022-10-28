const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/login', router.loginRoutes);
app.use('/user', router.userRoutes);
app.use('/categories', router.categoriesRoutes);
app.use('/post', router.postRoutes);

module.exports = app;
