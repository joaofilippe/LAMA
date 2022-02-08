import UsersModel, {
    UsersInput,
    UpdateInput,
} from './models/UsersModel';
import BaseDatabase from './BaseDatabase';

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


            await this.connection(this.tableName).insert(userModel);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    update = async (input: UpdateInput) => {
        try {
            const { id, name, email, password, role } = input;

            const inputDB = { name, email, password, role };

            await this.connection(this.tableName)
                .update(inputDB)
                .where(id);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    selectById = async (id: string) => {
        try {
            const result = await this.connection(this.tableName)
                .select()
                .where({ id });

            if (!result) {
                throw new Error(
                    'Usuário não encontrado, por favor, verifique os parâmetros enviados.'
                );
            }

            const user = UsersModel.toUserModel(result[0]);

            return user;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    selectByEmail = async (email: string) => {
        try {
            const result = await this.connection(this.tableName)
                .select()
                .where({ email });

            if (!result) {
                throw new Error(
                    'Usuário não encontrado, por favor, verifique os parâmetros enviados.'
                );
            }

            const user = UsersModel.toUserModel(result[0]);

            return user;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    delete = async (id: string) => {
        try {
            await this.connection(this.tableName)
                .delete()
                .where({ id });
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
}
