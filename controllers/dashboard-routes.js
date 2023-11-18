const router = require('express').Router();
const { User, Category, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Render the Dashboard by user_id
// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
    try {
        // Find the Posts by logged in user using session id
        const data = await Post.findAll({
            attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            include: [
                { model: Category, attributes: ['title'] },
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        // Return an error if record not found
        if (!data) {
            res.status(404).json({ message: 'Records for ' + req.session.user_id + ' not found.' });
            return;
        }

        // Serialize data so the template can read it
        const posts = data.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', { posts, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;