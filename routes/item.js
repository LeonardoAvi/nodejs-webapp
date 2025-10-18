const express = require('express');
const router = express.Router();
const externalApi = require('../services/externalApi');


router.get('/', async (req, res, next) => {
    try {
        const items = await externalApi.fetchItems();
        res.render('list', { items });
    } catch (err) { next(err); }
});


router.get('/new', (req, res) => res.render('form', { item: null }));


router.post('/', async (req, res, next) => {
    try {
        const { name, description } = req.body;
        await externalApi.createItem({ name, description });
        res.redirect('/items');
    } catch (err) { next(err); }
});


module.exports = router;