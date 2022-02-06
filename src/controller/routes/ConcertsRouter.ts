import express from "express";
import ConcertsController from '../ConcertsController';

const concertsRouter = express.Router()
const concertsController = new ConcertsController()


concertsRouter.post('/new', concertsController.create)
concertsRouter.get('/search/', concertsController.getByBandId)
concertsRouter.get('/search/', concertsController.getByWeekDay)
concertsRouter.get('/:id', concertsController.getById)
concertsRouter.put('/:id', concertsController.update)
concertsRouter.delete('/:id', concertsController.delete)


export default concertsRouter