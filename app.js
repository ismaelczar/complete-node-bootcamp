const express = require('express');
const morgan = require('morgan')

const app = express();

const toursRouter = require('./routes/toursRoutes');
const usersRouter = require('./routes/usersRouter')


app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1/tours', toursRouter)
app.use('/api/v1/users', usersRouter)

module.exports = app