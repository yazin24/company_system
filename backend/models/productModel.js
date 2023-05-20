import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    openingStock: {
        type: Number,
        required: true,
    },
    newPurchase: {
        type: Number,
        required: true,
    },
    totalStock: {
        type: Number,
        required: true,
    },
    output: {
        type: Number,
        required: true
    },
    endingStock: {
        type: Number,
        required: true,
    },
})

export const productModel = mongoose.model('products', productSchema)