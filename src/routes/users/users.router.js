const express = require('express');
const userController = require('./users.controller');

const usersRouter = express.Router();

usersRouter.route('/').get(userController.getAllUsers).post(userController.createUser);

usersRouter
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = usersRouter;
