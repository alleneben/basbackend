import { Router } from 'express';
import * as express from 'express';

import { UserController } from "../controllers/user";

class Bas {
    router: Router;
    

    constructor(){
        this.router = express.Router()

        this.createRoutes()
    }

    private createRoutes(){
        let b = "akoko is troublesome".split(" ")

        this.router.get("/", this.test)
    }

    test = async (req:any,res:any) => {
        const user = new UserController()

        console.log(await user.getAll());
        
        
        res.status(200).send({user:await user.getAll()});
    }

}

export default new Bas().router;