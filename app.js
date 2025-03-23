const express = require('express');
const morgan = require('morgan')

const toursRouter = require('./routes/toursRoutes');
const usersRouter = require('./routes/usersRouter')

const app = express();

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use('/api/v1/tours', toursRouter)
app.use('/api/v1/users', usersRouter)

module.exports = app