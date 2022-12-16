import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy')
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

console.log(process.env.SECRET_CODE);

// if you want anyone to be able to connect
app.use(cors({ origin: true }))

// if you want only your frontend to connect
app.use(cors({ origin: "http://localhost:3000" }))