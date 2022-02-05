export default class UsersModel {
    private readonly id: string;
    private readonly name: string;
    private readonly email: string;
    private readonly password: string;
    private readonly role: string;
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getUsersModel(){
        const id = this.id;
        const name = this.name;
        const email = this.email;
        const password = this.password;
        const role = this.role

        const userModel = {
            id, 
            name, 
            email,
            password,
            role
        }
    }
}

export interface UsersInput {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface UpdateInput {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
}
