import express from "express"
import dotenv from "dotenv"
import "reflect-metadata"
import cookieParser from "cookie-parser"
import session from "express-session"



import bas from './routes/bas';
import { DB } from  './db/db';


dotenv.config();



const app = express()
const port = 3000

app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cookieParser())
        app.use(session({ 
            secret: process.env.SESSION_SECRET_KEY || "",
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 30 * 24 * 60 * 60,
                httpOnly: true
            }
        }))
const db = new DB()
app.use('/api/v1/',bas)



app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is running at http://localhost:${port}`);
})