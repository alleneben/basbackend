import { getRepository } from "typeorm";
import { Users } from '../models/users';


export class UserController {

    getAll(){
        return getRepository(Users).findOne(1);
    }
}