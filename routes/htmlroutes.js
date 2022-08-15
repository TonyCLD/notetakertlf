const todo_router = require('express').Router();
// const Model = require('app/lib/Model');
const path = require('path');

// // loading html routes
// router.get('./public/notes', (request, response) => {
//     response.sendFile(path.join(__dirname, 'public/notes.html'))
// });

todo_router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

todo_router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  
module.exports = todo_router;