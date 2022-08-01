const { request, response } = require('express')
const todo_router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db_path = path.join(__dirname, '../db/todos.json');

function getTodoData() {
    return fs.promises.readFile(db_path, 'utf8')
    .then(data => JSON.parse(data));
};

// Get All todos
todo_router.get('/todos', (request, response) => {
    getTodoData()
    .then(todo_data => {
        response.json(todo_data);
    })
    .catch(err => console.log(err));
});

// Post(create) all todos
todo_router.post('/todos', (request, response) => {
    getTodoData()
        .then(todo_data => {
            const new_todo = request.body;
            
            const reference_id = todo_data.length ? todo_data[todo_data.length -1].id : 0;
            new_todo.id = reference_id + 1;
        
            todo_data.push(new_todo);

            fs.promises.writeFile(db_path, JSON.stringify(todo_data, null, 2))
                .then(() => response.json(todo_data)) 
                .catch(err => console.log(err));
        });

}); 

// Delete single todo
todo_router.delete('/todos', (request, response) => {
    getTodoData()
        .then(todos => {
            const id = request.body.id;
            const obj = todos.find(todo => todo.id === id);
            const index = todos.indexOf(obj);
            
            todos.splice(index, 1);
            
            fs.promises.writeFile(db_path, JSON.stringify(todos, null, 2))
                .then(() => {
                    console.log('todos updated suceessfully');
                    response.json(todos);
                }) 
                .catch(err => console.log(err));
            
        });
});

module.exports = todo_router;
console.log('test');
