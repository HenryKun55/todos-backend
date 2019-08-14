const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()
const port = 3333

mongoose.connect('mongodb+srv://notes:notesdqv@cluster0-9maly.mongodb.net/notes?retryWrites=true', {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(routes)

server.listen(process.env.PORT || port)