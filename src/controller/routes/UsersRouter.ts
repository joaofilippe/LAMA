import express from "express";
import UsersController from "../UsersController";

const UsersRouter = express.Router()
const usersController = new UsersController()

UsersRouter.post('/signup', usersController.signup)
UsersRouter.get('/search/', usersController.getByEmail)
UsersRouter.put('/:id', usersController.update)
UsersRouter.get('/:id', usersController.getById)
UsersRouter.delete('/:id', usersController.delete)

export default UsersRouter