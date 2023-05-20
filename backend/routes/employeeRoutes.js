import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { employeeModel } from '../models/employeeModel.js';

const router = express.Router();

router.post('/add-employee', async (req, res) => {

    const {lastName, firstName, position, accountType, userName, password} = req.body;

    const employee = await employeeModel.findOne({lastName, firstName, userName})

    if(employee) {
        console.log('User Already Exist!')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newEmployee = new employeeModel({lastName, firstName, position, accountType, userName, password: hashPassword})

    await newEmployee.save()
    
    res.json({message: 'Employee has been added successfully!'})

})

export {router as employeeRouter}