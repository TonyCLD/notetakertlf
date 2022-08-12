const todo_router = require('express').Router();
const Model = require('app/lib/Model');
const path = require('path');

// // loading html routes
// router.get('./public/notes', (request, response) => {
//     response.sendFile(path.join(__dirname, 'public/notes.html'))
// });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });
  
  

Model.exports = todo_router;