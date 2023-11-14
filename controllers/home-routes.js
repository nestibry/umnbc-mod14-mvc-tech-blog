const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // const userData = await User.findAll({
        //     attributes: { exclude: ['password'] },
        //     order: [['name', 'ASC']],
        // });

        const posts = await Post.findAll({            
            attributes: ['title', 'content','createdAt','updatedAt'],
            include: [
                { model: User, attributes: ['name'] },
                { model: Category, attributes: ['title'] },
                { model: Comment, attributes: ['content'], include: {model: User, attributes: ['name','createdAt']}}
            ],
        });

        res.render('homepage', {posts});
        

        
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
