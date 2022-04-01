const router = require('express').Router();
const {
	createUser,
	login,
	logout,
	signupHandler
} = require('../../../controllers/userController');

router.route('/')
	.post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
