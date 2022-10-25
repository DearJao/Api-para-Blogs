const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express. Router();

router.post('/login', userController.createUser);

module.exports = router;