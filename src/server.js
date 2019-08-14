const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://notes:notesdqv@cluster0-9maly.mongodb.net/notes?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(3333)