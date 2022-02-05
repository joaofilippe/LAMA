import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config;

export const app: Express = express();
app.use(express.json());
app.use(cors());

const port: number = Number(process.env.PORT)|| 3006;

export const server = app.listen(port, () => {
    if(server) {
        console.log(`Server is running on http://localhost:${port}`)
    } else {
        console.log("Something got wrong. Please, start again.")
    }
})
