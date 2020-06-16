const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

const departmentsRouter = require('../departments/departmentsRouter')
const usersRouter = require('../users/usersRouter')

server.use(helmet())
server.use(express.json())
server.use(cors())

//routers
server.use('/api/departments', departmentsRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
     res.json({api: 'up'})
})

module.exports = server