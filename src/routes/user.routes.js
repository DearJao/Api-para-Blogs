const express = require('express');
const userController = require('../controller/user.controller');
const oken = require('../middleware/token.validation');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', oken.validateToken, userController.getUser);
router.get('/:id', oken.validateToken, userController.getUserById);

module.exports = router;