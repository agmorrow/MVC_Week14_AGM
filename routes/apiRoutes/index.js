const router = require('express').Router();
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');
router.use('/users', userRoutes);
router.use('/dashboard', todoRoutes);
module.exports = router;