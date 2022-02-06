import { Request, Response } from 'express';

import ConcertsDatabase from '../database/ConcertsDatabase';
import {
    ConcertsInputDTO,
    GetByIdInputDTO,
    GetByBandIdInputDTO,
    GetByWeekDayInputDTO,
    ConcertsUpdateInputDTO,
    DeleteInputDTO,
} from '../entities/Concerts';

export default class ConcertsController {
    
    private database: ConcertsDatabase;
    constructor() {
        
        this.database = new ConcertsDatabase();
    }

    async create(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string;
            const { weekDay, startTime, endTime, bandId } = req.body;

            const input: ConcertsInputDTO = {
                weekDay,
                startTime,
                endTime,
                bandId,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string;
            const id: string = req.params.id;

            const input: GetByIdInputDTO = { id, token };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async getByWeekDay(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string;
            const weekDay: string = req.query.weekDay as string;
            const input: GetByWeekDayInputDTO = { weekDay, token };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async getByBandId(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string;
            const bandId: string = req.query.bandId as string;
            const input: GetByBandIdInputDTO = { bandId, token };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string;
            const { id, weekDay, startTime, endTime, bandId } =
                req.body;
            const input: ConcertsUpdateInputDTO = {
                id,
                weekDay,
                startTime,
                endTime,
                bandId,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string;
            const id: string = req.params.id as string;

            const input: DeleteInputDTO = { id, token };
        } catch (error: any) {
            res.send(error.message);
        }
    }
}
