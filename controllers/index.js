const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./app.js')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;