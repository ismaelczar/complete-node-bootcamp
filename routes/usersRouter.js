const express = require('express')
const usersRouter = express.Router();

const userController = require('../controllers/usersController');

usersRouter.route('/')
    .get(userController.getUsers)
    .post(userController.createUser)

usersRouter.route('/:id')
    .patch(userController.updatedPassword)
    // .put(updateUser)
    .delete(userController.deleteUser)

module.exports = usersRouter