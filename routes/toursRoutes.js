const express = require('express')
const toursRouter = express.Router()

const tourController = require('../controllers/toursController')

toursRouter.route('/')
    .get(tourController.getTours)
    .post(tourController.createTour)


toursRouter.route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)


module.exports = toursRouter;


