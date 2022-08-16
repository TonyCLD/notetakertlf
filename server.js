const express = require('express');
const router = require('express').Router();
const app = express();
// const port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
//   console.log(`Listening on da port ${PORT}`);
// }
// app.listen(port);
// const PORT = process.env.PORT || 3333;
const path = require('path');
const routes = require('./routes/api_routes');
const notesroutes = require('./routes/htmlroutes.js');

// share static/browser files
app.use(express.static(path.join(__dirname, 'public')));

// attach client-side form data to request.body object
app.use(express.urlencoded({extended: true}));

// middleware important, get and parses JSON data incoming 
app.use(express.json());

// // load routes
app.use('/api', routes); 

// // load routes, notes
app.use('/', notesroutes);



// // loading html routes
// router.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, './index.html'))
// });

// start server
app.listen(PORT, () => {
    console.log(`Listening on da port ${PORT}`);
}); 
