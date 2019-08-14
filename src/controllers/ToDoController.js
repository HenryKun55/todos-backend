const User = require('../models/User')
const ToDo = require('../models/Todo')

class ToDoController {
    async store(req, res) {
        const user = await User.findById(req.params.id)

        const todo = await ToDo.create({title: req.body.title, done: false})

        user.todos.push(todo)

        await user.save()

        res.json(todo)
    }

    async done(req, res) {

        const todo = await ToDo.findById(req.params.idTodo)

        todo.done = !todo.done

        await todo.save()

        const user = await User.updateOne(
            {
                _id: req.params.id, 'todos._id': req.params.idTodo
            },
            {
                '$set': {
                    "todos.$": todo
                }
            }
        )

        res.json(user)
        
    }

    async remove(req, res) {
        const user = await User.findById(req.params.id)
        const todo = await ToDo.findById(req.params.idTodo)
        
        user.todos.pull(todo)

        todo.deleteOne()

        await user.save()

        res.json(user)
        
    }

    async showTodos(req, res) {
        const todo = await ToDo.find()
        res.json(todo)
    }


}

module.exports = new ToDoController