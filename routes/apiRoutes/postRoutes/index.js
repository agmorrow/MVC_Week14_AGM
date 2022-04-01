const router = require('express').Router();
const {
	getAllPosts,
    createPost,
    getPostById,
    deletePostById,
    updatePost
} = require('../../../controllers/postController');

router.route('/')
    .get(getAllPosts)
    .post(createPost)

router.route('/:postId')
    .get(getPostById)
    .delete(deletePostById)
	.put(updatePost)
    
module.exports = router;