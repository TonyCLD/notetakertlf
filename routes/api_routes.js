// const { request, response } = require('express')
const todo_router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db_path = path.join(__dirname, '../db/db.json');

function getNotes() {
    return fs.promises.readFile(db_path, 'utf8')
    .then(data => JSON.parse(data));
};

// todo_router.get('/notes', (req, res) => { 
//     let results = getNotes();  
//     console.log(results);
//     if(req.body) { 
//     res.json(results); }
// });


todo_router.get('/notes', (request, response) => {
    getNotes()
    .then(todo_data => {
        response.json(todo_data);
    })
    .catch(err => console.log(err));
});

// // Post(create) all todos
todo_router.post('/notes', (request, response) => {
    getNotes()
        .then(todo_data => {
            const new_todo = request.body;
            
            // const reference_id = todo_data.length ? todo_data[todo_data.length -1].id : 0;
            // new_todo.id = reference_id + 1;
        
            todo_data.push(new_todo);

            fs.promises.writeFile(db_path, JSON.stringify(todo_data, null, 2))
                .then(() => response.json(todo_data)) 
                .catch(err => console.log(err));
        });

}); 

// // Delete single todo
// todo_router.delete('/notes/:id', (request, response) => {
//     getTodoData()
//         .then(todos => {
//             const id = request.body.id;
//             console.log(request.body);
//             const obj = todos.find(todo => todo.id === id);
//             const index = todos.indexOf(obj);
            
//             todos.splice(index, 1);
            
//             fs.promises.writeFile(db_path, JSON.stringify(todos, null, 2))
//                 .then(() => {
//                     console.log('todos updated suceessfully');
//                     response.json(todos);
//                 }) 
//                 .catch(err => console.log(err));
            
//         });
// });

module.exports = todo_router;

