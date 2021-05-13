import { getRepository } from "typeorm";
import { Users, Providers } from '../models/users';


export class UserController {

    getUsers(param: object){

        return getRepository(Users).find(param);
    }

    getProviders(param: object){
        return getRepository(Providers).find(param);
    } 
}