import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { employeeRouter } from './routes/employeeRoutes.js';

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});

mongoose.connect(process.env.DB_STRING)
.then(() => {
    console.log('Database Connection is Success!')
}).catch((err) => {
    console.error(err);
})

app.use('/admin', employeeRouter)

