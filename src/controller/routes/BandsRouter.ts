import express from 'express';
import BandsController from '../BandsController';

const bandsRouter = express.Router();

const bandsController = new BandsController();

bandsRouter.post('/new', bandsController.create);
bandsRouter.get('/search/', bandsController.getByResponsible);
bandsRouter.get('/search/', bandsController.getByMusicGenre);
bandsRouter.get('/:id', bandsController.getById);
bandsRouter.put('/:id', bandsController.update);
bandsRouter.delete('/:id', bandsController.delete);

export default bandsRouter;
