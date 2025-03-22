const express = require('express')
const userController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.route('/')
    .get(userController.getUsers)
    .post(userController.createUser)

usersRouter.route('/:id')
    .patch(userController.updatedPassword)
    // .put(updateUser)
    .delete(userController.deleteUser)

module.exports = usersRouter