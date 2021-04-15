import express from "express"
import dotenv from "dotenv"
import "reflect-metadata"

import bas from './routes/bas';
import { DB } from  './db/db';


dotenv.config();



const app = express()
const port = 3000


const db = new DB()
app.use('/api/v1/',bas)



app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is running at http://localhost:${port}`);
})