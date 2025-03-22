const express = require('express')
const tourController = require('../controllers/toursController')

const toursRouter = express.Router()

toursRouter.param('id', tourController.findTourById)

toursRouter.route('/')
    .get(tourController.getTours)
    .post(tourController.createTour)


toursRouter.route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)


module.exports = toursRouter;


