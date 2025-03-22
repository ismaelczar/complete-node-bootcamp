const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

const getTours = (req, res) => {
    return res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
}

const getTourById = (req, res) => {
    const id = req.params.id * 1
    const tour = tours.find((tour) => tour.id === id)

    if (!tour) {
        return res.status(400).json({
            status: 'fail',
            message: 'Id invalid'
        })
    }

    return res.status(200).json({
        status: 'success',
        results: '',
        data: {
            tours: tour
        }
    })
}

const createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)

    fs.watchFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })

    return
}

const updateTour = (req, res) => {
    const id = req.params.id;
    const tour = tours.find((tour) => tour.id === id)

    if (!tour) {
        return res.status(400).json({
            status: 'faild',
            message: 'Tour not found.'
        })
    }

    return res.status(200).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })
}

const deleteTour = (req, res) => {
    const id = req.params.id;
    const tour = tours.find((tour) => tour.id === id);

    if (!tour) {
        return res.status(400).json({
            status: 'faild',
            message: 'Tour not found.'
        })
    }

    return res.status(200).json({
        status: 'sucess',
        data: null
    })
}

module.exports = { getTours, getTourById, createTour, updateTour, deleteTour }