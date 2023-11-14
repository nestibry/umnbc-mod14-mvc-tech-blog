const router = require('express').Router();
const { User, Category, Post, Comment } = require('../../../models');

router.get('/', async (req, res) => {
    // Find all records and include other model data
    try {
        const data = await Post.findAll({
            // include: [{ model: Category }, {model: User}, {model: Comment}]
            // attributes: ['title','content']
            // attributes: {exclude:'category_id'}
            
            attributes: ['title', 'content'],
            include: [
                { model: User, attributes: ['name'] },
                { model: Category, attributes: ['title'] },
                { model: Comment, attributes: ['content'], include: {model: User, attributes: ['name']}}
            ],
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
    // Find record by ID and include other model data
    try {
        const data = await Post.findByPk(req.params.id, {
            // include: [{ model: Category }]
        });
        // Return an error if record not found
        if (!data) {
            res.status(404).json({ message: 'Record ' + req.params.id + ' not found.' });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    // create a new record
    try {
        const data = await Post.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:id', async (req, res) => {
    // update a record by its `id` value
    try {
        const data = await Post.update(req.body, {
            where: { id: req.params.id }
        });
        // Return an error if data not found
        if (data[0] === 0) {
            res.status(400).json({ message: 'Record ' + req.params.id + ' is not found or updated.' });
            return;
        }
        res.status(200).json({ message: 'Record ' + req.params.id + ' updated.', updated_to: req.body });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    // delete a record by its `id` value
    try {
        const data = await Post.destroy({
            where: { id: req.params.id }
        });
        if (!data) {
            res.status(404).json({ message: 'Record ' + req.params.id + ' not found.' });
            return;
        }
        res.status(200).json({ message: 'Record ' + req.params.id + ' is deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;