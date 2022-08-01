const express = require('express');
const { dirname } = require('path');
const PORT = process.env.PORT || 3333;
const path = require('path');
const app = express();
const api_routes = require('./routes/api_routes');

// Share static/browser files.
app.use(express.static(path.join(__dirname, 'browser')));
// attach client side form data to request.body object
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Load Routes
app.use('/api', api_routes);

// Start Server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
}); 
 