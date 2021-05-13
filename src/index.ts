
import express from "express"
import dotenv from "dotenv"
import "reflect-metadata"
import cookieParser from "cookie-parser"
import session from "express-session"


import bas from './routes/bas'
import { DB } from  './db/db'


dotenv.config()



class Server {
    private app: express.Express;
    private db: any;
    private port: number = 3000;
    constructor(){
        this.app = express()
        this.db = new DB()
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser())
        this.app.use(session({ 
            secret: process.env.SESSION_SECRET_KEY || "",
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            }
        }))

        this.setRoutes()
    }


    private setRoutes(){
        this.app.use('/', express.static(__dirname))
        this.app.use('/api/v1/',bas)
    }


    public start(){
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server is running at http://localhost:${this.port}`)
        })
    }
}

const server = new Server()
server.start()
 