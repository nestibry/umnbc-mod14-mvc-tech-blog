const router = require('express').Router();
const { User, Category, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {

        const data = await Post.findAll({            
            attributes: ['title', 'content','createdAt','updatedAt'],
            include: [
                { model: User, attributes: ['name'] },
                { model: Category, attributes: ['title'] },
                { model: Comment, attributes: ['content'], include: {model: User, attributes: ['name','createdAt']}}
            ],
        });
        const posts = data.map((post) => post.get({ plain: true }));

        res.render('homepage', {posts});
        
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
