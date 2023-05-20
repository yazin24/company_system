import express from 'express';
import { productModel } from '../models/productModel.js';

const router = express.Router();

router.post('/add-product', async (req, res) => {
    const {itemName, openingStock, newPurchase, totalStock, output, endingStock} = req.body

    const product = await productModel.findOne({itemName});

    if(product){
        console.log('Product already in the database')
    }

    const newProduct = new productModel({itemName, openingStock, newPurchase, totalStock,output, endingStock})

    await newProduct.save();

    res.json({message: 'Items has been added successfully!'})
});

router.get('/list-products', async (req, res) => {

    try {
        const response = await productModel.find({})
        res.json(response);
    }catch(err) {
        console.error(err);
    }

});



export {router as productRouter}