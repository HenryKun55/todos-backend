const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const server = express()
const port = 3333

mongoose.connect('mongodb+srv://notes:notesdqv@cluster0-9maly.mongodb.net/notes?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(routes)

server.listen(process.env.PORT || port)