import { Request, Response } from 'express';
import UsersBusiness from '../business/UsersBusiness';

import UsersDatabase from '../database/UsersDatabase';
import {
    UsersInputDTO,
    UsersUpdateInputDTO,
    GetByIdInputDTO,
    GetByEmailInputDTO,
    DeleteInputDTO,
} from '../entities/Users';

export default class UsersController {
    database: UsersDatabase;
    business: UsersBusiness;    constructor() {
        this.database = new UsersDatabase();
        this.business = new UsersBusiness()
    }

    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, roleInput } = req.body;
            const input: UsersInputDTO = {
                name,
                email,
                password,
                roleInput,
            };

            const token = await this.business.createUser(this.database, input)
        } catch (error: any) {
            res.send(error.message);
        }
    };

    getById = async (req: Request, res: Response) => {
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
    };

    getByEmail = async (req: Request, res: Response) => {
        try {
            const email: string = req.params.id as string;
            const token: string = req.headers.authorization as string;

            const input: GetByEmailInputDTO = {
                email,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id as string;
            const token: string = req.headers.authorization as string;
            const { name, email, password, role } = req.body;
            const input: UsersUpdateInputDTO = {
                id,
                name,
                email,
                password,
                role,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const token: string = req.headers.authorization as string;

            const input: DeleteInputDTO = {
                id,
                token,
            };
        } catch (error: any) {
            res.send(error.message);
        }
    };
}
