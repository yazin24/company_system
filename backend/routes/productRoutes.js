import express from 'express';
import { productModel } from '../models/productModel.js';
import { employeeModel } from '../models/employeeModel.js';

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

router.put ('/:id', async (req, res) => {
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id,{
            itemName: req.body.firstName,
            openingStock: req.body.openingStock,
            newPurchase: req.body.newPurchase,
            output: req.body.output,
        },
        {new: true}
        );
        if(!product) {
            return res.status(404).json({error:'Product not found'})
        }
        res.json(product);
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'Server error'})
    }
});

router.delete('/:id', async (req, res) => {

    const {id} = req.params;

    try {
        await productModel.findByIdAndDelete(id);
        res.json({message: 'Product deleted successfully!'});
    }catch(err) {
        console.error(err);
        res.status(500).json({error: "An error occurred while deleting the product."});
    }
})



export {router as productRouter}