import { Request, Response } from 'express';
import Authenticator from '../services/Authenticator';
import HashManager from '../services/HashManager';
import BandsDatabase from '../database/BandsDatabase';
import {
    BandsCreateInputDTO,
    GetByIdInputDTO,
    GetByMusicGenreInputDTO,
    GetByResponsibleInputDTO,
    BandsUpdateInputDTO,
    DeleteInputDTRO,
} from '../entities/Bands';

export default class BandsController {
    authenticator: Authenticator;
    hashManager: HashManager;
    database: BandsDatabase;
    constructor() {
        this.authenticator = new Authenticator();
        this.hashManager = new HashManager();
        this.database = new BandsDatabase();
    }

    async create(req: Request, res: Response) {
        try {
            const { name, musicGenre, responsible } = req.body;
            const token: string = req.headers.authorization as string;

            const input: BandsCreateInputDTO = {
                name,
                musicGenre,
                responsible,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id: string = req.params.id as string;
            const token: string = req.headers.authorization as string;

            const input: GetByIdInputDTO = {
                id,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }
    async getByResponsible(req: Request, res: Response) {
        try {
            const responsible: string = req.query
                .responsible as string;
            const token: string = req.headers.authorization as string;

            const input: GetByResponsibleInputDTO = {
                responsible,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }
    async getByMusicGenre(req: Request, res: Response) {
        try {
            const musicGenre: string = req.query.musicGenre as string;
            const token: string = req.headers.authorization as string;

            const input: GetByMusicGenreInputDTO = {
                musicGenre,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id, name, musicGenre, responsible } = req.body;
            const token: string = req.headers.authorization as string;

            const input: BandsUpdateInputDTO = {
                id,
                name,
                musicGenre,
                responsible,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const token: string = req.headers.authorization as string;

            const input: DeleteInputDTRO = { id, token };
        } catch (error: any) {
            res.send(error.message);
        }
    }
}
