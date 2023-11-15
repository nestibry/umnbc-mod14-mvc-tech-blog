const router = require('express').Router();
const { User, Category, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        // Get all RECORDS and JOIN with other data
        const data = await Post.findAll({
            attributes: ['title', 'content', 'createdAt', 'updatedAt'],
            include: [
                { model: User, attributes: ['name'] },
                { model: Category, attributes: ['title'] },
                { model: Comment, attributes: ['content'], include: { model: User, attributes: ['name', 'createdAt'] } }
            ],
        });

        // Serialize data so the template can read it
        const posts = data.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', { posts, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
});




module.exports = router;