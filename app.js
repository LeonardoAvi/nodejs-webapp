const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render('index'));
app.use('/items', itemsRouter);


module.exports = app;