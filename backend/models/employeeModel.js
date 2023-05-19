import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    accountType: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const employeeModel = mongoose.model('employees', employeeSchema);