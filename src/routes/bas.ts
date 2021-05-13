import { Router } from 'express';
import * as express from 'express';

import { UserController } from "../controllers/user";
import { checkAccess,checkRootAccess, genAPIKey } from '../utils/auth';

class Bas {
    router: Router;
    

    constructor(){
        this.router = express.Router()

        this.createRoutes()
    }

    private createRoutes(){
        this.router.get("/", checkRootAccess,this.getroot)
        this.router.get("/users", checkAccess, this.users)
        this.router.get("/providers", checkAccess, this.providers)
    }

    getroot = async (req: any, res:any) => {
        const oneDayToSeconds = 2 * 24 * 60 * 60 * 1000;
        
        const token = genAPIKey({apiKey: process.env.API_SECRET_KEY})
        res.cookie("_basInit", token, {maxAge: oneDayToSeconds,httpOnly: false})
        res.status(200).send({success: true, message: 'Server running...'})
    }

    signin = async (req:any,res:any) => {
        const oneDayToSeconds = 2 * 24 * 60 * 60 * 1000;
        res.cookie("_basAuth", 'token', {maxAge: oneDayToSeconds,httpOnly: false})
        res.status(200).send({success: true})
    }
    
    signup = async (req:any,res:any) => {

    }

    activateuser = async (req:any, res:any) => {

    }

    users = async (req:any,res:any) => {
        const user = new UserController()

        const param = req.body

        res.status(200).send({success: true, data: await user.getUsers(param)});
    }

    providers = async (req:any, res:any) => {
        const providers = new UserController()
        
        const param = req.body

        res.status(200).send({success: true, data: await providers.getProviders(param)})
    }

}

export default new Bas().router;