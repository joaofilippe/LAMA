export enum USERS_ROLE {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL',
}

export default class Users {
    private readonly id: string;
    private readonly name: string;
    private readonly email: string;
    private readonly password: string;
    private readonly role: USERS_ROLE;
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: USERS_ROLE
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public getUsers() {
        const id = this.id;
        const name = this.name;
        const email = this.email;
        const password = this.password;
        const role = this.role;

        const userModel = {
            id,
            name,
            email,
            password,
            role,
        };
    }

    public static toUsers(input?: any) {
        const user: Users = new Users(
            input.id,
            input.name,
            input.email,
            input.password,
            input.role
        );

        return user;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }

    public getRole() {
        return this.role;
    }

    public getRoleAsString() {
        switch (this.role) {
            case USERS_ROLE.ADMIN:
                return 'ADMIN';
                break;
            case USERS_ROLE.NORMAL:
                return 'NORMAL';
                break;
            default:
                'Parâmetros inválidos';
                break;
        }
    }
}

export interface UsersInputDTO {
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface GetByEmailInputDTO {
    email: string;
    token: string;
}
export interface GetByIdInputDTO {
    id: string;
    token: string;
}
export interface UsersUpdateInputDTO {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    token: string;
}
export interface DeleteInputDTO {
    id: string;
    token: string;
}
