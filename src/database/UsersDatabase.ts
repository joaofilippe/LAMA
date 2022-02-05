import UsersModel, { UsersInput } from '../models/UsersModel';
import BaseDatabase from './BaseDatabase';
import { UpdateInput } from '../models/UsersModel';

export default class UsersDatabase extends BaseDatabase {
    tableName = 'users';

    create = async (input: UsersInput) => {
        try {
            const { id, name, email, password, role } = input;

            const usersModel = new UsersModel(
                id,
                name,
                email,
                password,
                role
            );

            const userModel = usersModel.getUsersModel();

            this.connection(this.tableName).insert(userModel);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
    update = async (input: UpdateInput) => {
        try {
            const { name, email, password, role } = input;

            this.connection(this.tableName).insert();
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
}
