const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.listPosts);

router.get('/post/new', postController.newPostForm);

router.post('/post', postController.createPost);

router.get('/post/:id', postController.showPost);

router.get('/post/:id/edit', postController.editPostForm);

router.post('/post/:id/update', postController.updatePost);

router.post('/post/:id/delete', postController.deletePost);

module.exports = router;
