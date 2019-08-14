const express = require('express')

const UserController = require('./controllers/UserController')
const ToDoController = require('./controllers/ToDoController')

const routes = express.Router()

routes.post('/user', UserController.store)
routes.post('/user/:id/todo', ToDoController.store)
routes.get('/user/:id', UserController.show)
routes.get('/todos', ToDoController.showTodos)
routes.delete('/user/:id/todo/:idTodo', ToDoController.remove)
routes.post('/user/:id/todo/:idTodo', ToDoController.done)

module.exports = routes