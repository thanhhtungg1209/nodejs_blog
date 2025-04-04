const handlebars = require('express-handlebars');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { extname } = require('path/win32');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/home-page',  (req, res) => {
    res.render('home');
})


app.get('/news',  (req, res) => {
    res.render('news');
})

// http://localhost:3000/home-page
app.listen(3000);







