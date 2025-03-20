const express = require('express');
const toursRouter = require('./routes/tourRoutes');

const app = express();

app.use(express.json())
app.use('/', toursRouter)

const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})