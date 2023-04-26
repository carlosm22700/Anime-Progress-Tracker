// Dependencies
const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
const animeRoutes = require('./routes/animes');
const path = require('path')

// Initialize Express App
const app = express();

// Environment Variables
require ('dotenv').config();
require ('./config/database');

// Configure App Settings 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// console.log(`Views directory: ${app.get('views')}`); // Add this line to log the views directory path

// Middleware 
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mounted Routes
app.use('/', indexRoutes);
app.use('/animes', animeRoutes);

// tell the application to listen for requests
app.listen(3000, () => {
    console.log('express is listening on port:3000');
});

// app.use('*', (req, res) => {
//     res.render('404', {title: '404 - Page Not Found'});
// });