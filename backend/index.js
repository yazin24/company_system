import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import { employeeRouter } from './routes/employeeRoutes.js';
import { productRoutes } from './routes/productRoutes.js';

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company_system',
});

db.connect((err) => {
    if(err) {
        console.error('Error connecting to the database!', err);
        return;
    }
    console.log('Connection to the database has been established!')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});

mongoose.connect(process.env.DB_STRING)
.then(() => {
    console.log('Database Connection is Success!')
}).catch((err) => {
    console.error(err);
})

const productRouter = productRoutes(db);
app.use('/admin', employeeRouter)
app.use('/product', productRouter)

