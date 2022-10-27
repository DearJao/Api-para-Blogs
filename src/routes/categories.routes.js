const express = require('express');
const categoriesController = require('../controller/categories.controller');
const oken = require('../middleware/token.validation');

const router = express.Router();

router.post('/', oken.validateToken, categoriesController.createCategory);
// router.get('/', oken.validateToken, userController.getUser);

module.exports = router;