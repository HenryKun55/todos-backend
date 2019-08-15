const express = require('express')

const UserController = require('./controllers/UserController')
const ToDoController = require('./controllers/ToDoController')

const routes = express.Router()

routes.post('/user', UserController.store)
routes.get('/user', UserController.get)
routes.post('/user/:id/todo', ToDoController.store)
routes.get('/user/:id', UserController.show)
routes.post('/login', UserController.login)
routes.get('/todos', ToDoController.showTodos)
routes.delete('/user/:id/todo/:idTodo', ToDoController.remove)
routes.post('/user/:id/todo/:idTodo', ToDoController.done)

module.exports = routes