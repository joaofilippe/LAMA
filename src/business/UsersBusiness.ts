import Authenticator from '../services/Authenticator';
import HashManager from '../services/HashManager';
import idGenerator from '../services/idGenerator';
import Users, { UsersInputDTO } from '../entities/Users';
import UsersDatabase from '../database/UsersDatabase';
export default class UsersBusiness {
    authenticator: Authenticator;
    hashManager: HashManager;

    constructor() {
        this.authenticator = new Authenticator();
        this.hashManager = new HashManager();
    }

    async createUser(database: UsersDatabase, input: UsersInputDTO) {
        try {
            const { name, email, password, roleInput } = input;
            if (!name || !email || !password || !roleInput) {
                throw new Error('Parâmetros não encontrados.');
            }
            const id = idGenerator();
            const role = Users.toUsersRole(roleInput);
            const token = await this.authenticator.generateToken({
                id,
                role,
            });
            const hashedPassword: string =
                await this.hashManager.hash(password);

            const user: Users = new Users(
                id,
                name,
                email,
                hashedPassword,
                role
            );

            const userInput = user.getUsers();


            await database.create(userInput);

            return token;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
