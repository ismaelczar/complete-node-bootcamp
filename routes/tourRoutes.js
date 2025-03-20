const fs = require('fs')
const express = require('express')
const toursRouter = express.Router()

const tourController = require('../controllers/tourController')

toursRouter.route('/api/v1/tours')
    .get(tourController.getTours)
    .post(tourController.createTour)


toursRouter.route('/api/v1/tours/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)


module.exports = toursRouter;


