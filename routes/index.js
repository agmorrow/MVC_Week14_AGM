const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage,  loginView, signupView, logout } = require('../controllers/userController');
const { getAllPosts } = require('../controllers/postController');

router.get('/', renderHomePage);
router.get('/dashboard', getAllPosts);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/logout', logout);
router.use('/api', apiRoutes);

module.exports = router;