const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

const checkId = (req, res, next) => {
    const id = req.params.id * 1;
    const tour = tours.find((tour) => tour.id === id)

    if (!tour) {
        return res.status(400).json({
            status: 'fail',
            message: 'Id invalid'
        })
    }

    req.tour = tour

    next()
}

const checkBody = (req, res, next) => {
    if (!req.bory.name || req.bory.price) {
        return res.status(400).json({
            status: 'Fail',
            messege: 'Missing name or price'
        })
    }
    next()
}

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
    const tour = req.tour

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

    return res.status(200).json({
        status: 'success',
        data: {
            newTour: newTour
        }
    })
}

const updateTour = (req, res) => {
    Object.assign(req.tour, req.body)

    return res.status(200).json({
        status: 'success',
        data: {
            tour: req.tour
        }
    })
}

const deleteTour = (req, res) => {
    const tour = req.tour

    return res.status(204).json({
        status: 'sucess',
        data: null
    })
}

module.exports = { getTours, getTourById, createTour, updateTour, deleteTour, checkId, checkBody }