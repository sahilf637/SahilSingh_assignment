import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv, { config } from "dotenv";
import todoRouter from "./router/todoRouter";

const app = express();

dotenv.config({ path: "./../config.env" });

app.use(cors({
    credentials: true,
}));

app.use(express.json({ limit: '10kb' }));       

app.use(bodyParser.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/', todoRouter);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log("Listening to port 8000");
})

