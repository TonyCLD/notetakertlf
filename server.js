const express = require('express');
const router = require('express').Router();
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');
const api_routes = require('./routes/api_routes');

// share static/browser files
app.use(express.static(path.join(__dirname, 'public')));

// attach client-side form data to request.body object
app.use(express.urlencoded({extended: true}));

// middleware important, get and parses JSON data incoming 
app.use(express.json());

// load routes
app.use('/api', api_routes);

// loading html routes
router.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, './notes.html'))
});

// loading html routes
router.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, './index.html'))
});

// start server
app.listen(PORT, () => {
    console.log(`Listening on da port ${PORT}`);
}); 