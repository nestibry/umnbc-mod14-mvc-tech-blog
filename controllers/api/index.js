const router = require('express').Router();
const userRoutes = require('./userRoutes');
require('dotenv').config();

router.use('/users', userRoutes);

if(process.env.NODE_ENV === 'dev'){
    const devRoutes = require('./devRoutes');
    router.use('/dev', devRoutes);
}

module.exports = router;
