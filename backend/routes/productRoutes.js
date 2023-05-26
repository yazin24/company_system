import express from 'express';
import { productModel } from '../models/productModel.js';
import { employeeModel } from '../models/employeeModel.js';

const router = express.Router();

export const productRoutes = (db) => {

router.post('/add-product', async (req, res) => {

    const {product_name, opening_stock, new_purchase, total_stock, output, ending_stock} = req.body

    db.query('INSERT INTO inventory_products (product_name, opening_stock, new_purchase, total_stock, output, ending_stock) VALUES (?, ?, ?, ?, ?,?)', [product_name, opening_stock, new_purchase, total_stock, output, ending_stock], (err, result) => {
        if(err) {
            console.log(err)
        }else {
            res.send('Values Inserted!')
        }
    });

});

router.get('/list-products', async (req, res) => {

   db.query('SELECT * FROM inventory_products', (err, result) => {
    if(err) {
        console.error(err);
    }else {
        res.json(result)
    }
   })

});

router.put ('/update/:id', async (req, res) => {
   
    const id = req.params.id
    const {product_name ,opening_stock, new_purchase, total_stock, output, ending_stock} = req.body

    db.query('UPDATE inventory_products SET product_name = ?, opening_stock = ?, new_purchase = ?,  output = ? where id = ?', [product_name, opening_stock, new_purchase, output, id], (err, result) => {
        if(err) {
            console.error(err);
            res.status(500).json({error:'Failed to update product!'});
        }else {
            res.json({message: 'Product has been updated successfully!'})
        }
    });

});

router.delete('/delete/:id', async (req, res) => {

    const {id} = req.params;

    db.query('DELETE FROM inventory_products where id = ?', id, (err,result) => {
        if(err) {
            console.error(err);
            res.status(500).json({error: 'Failed to delete product!'})
        }else {
            res.json({message: 'Product has been deleted successfully!'})
        }
    })
});

return router;

}
