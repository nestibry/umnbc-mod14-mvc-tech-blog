const router = require('express').Router();
const { User, Category, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

        const posts = await Post.findAll({            
            attributes: ['title', 'content','createdAt','updatedAt'],
            include: [
                { model: User, attributes: ['name'] },
                { model: Category, attributes: ['title'] },
                { model: Comment, attributes: ['content'], include: {model: User, attributes: ['name','createdAt']}}
            ],
        });

        res.render('homepage');
        
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
