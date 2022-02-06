import express from "express";
import UsersController from "../UsersController";

const usersRouter = express.Router()
const usersController = new UsersController()

usersRouter.post('/signup', usersController.signup)
usersRouter.get('/search/', usersController.getByEmail)
usersRouter.put('/:id', usersController.update)
usersRouter.get('/:id', usersController.getById)
usersRouter.delete('/:id', usersController.delete)

export default usersRouter