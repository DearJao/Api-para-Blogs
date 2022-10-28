const express = require('express');
const postController = require('../controller/post.controller');
const oken = require('../middleware/token.validation');

const router = express.Router();

router.post('/', oken.validateToken, postController.createPost);
router.get('/', oken.validateToken, postController.getPosts);

module.exports = router;