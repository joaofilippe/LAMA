import Authenticator from '../services/Authenticator';
import HashManager from '../services/HashManager';
import idGenerator from '../services/idGenerator';
export default class UserBusiness {
    authenticator: Authenticator
    hashManager: HashManager


    constructor(){
        this.authenticator = new Authenticator()
        this.hashManager = new HashManager()
    }

    async  createUser() {
        const id = idGenerator()
        const 
    }
}