const router = require('express').Router();


const devUserRoutes = require('./devUserRoutes');
const devCategoryRoutes = require('./devCategoryRoutes');
const devPostRoutes = require('./devPostRoutes');

router.use('/users', devUserRoutes);
router.use('/categories', devCategoryRoutes);
router.use('/posts', devPostRoutes);

module.exports = router;