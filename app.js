const express = require('express');
const toursRouter = require('./routes/toursRoutes');
const usersRouter = require('./routes/usersRouter')

const app = express();

app.use(express.json())
app.use('/api/v1/tours', toursRouter)
app.use('/api/v1/users', usersRouter)

const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})